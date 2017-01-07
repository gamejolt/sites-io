import { Component, Inject } from 'ng-metadata/core';
import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';
import template from 'html!./app.component.html';

@Component( {
	selector: 'gj-app',
	template,
} )
export class AppComponent
{
	isLoading = true;

	site: any;
	game: any;
	mediaItems: any[];
	packages: any[];

	// Gotta do this so that the injection process works and replaces with the
	// correct asset server.
	templates = {};

	constructor(
		@Inject( '$location' ) $location: ng.ILocationService,
		@Inject( '$sce' ) $sce: ng.ISCEService,
		@Inject( '$window' ) private $window: ng.IWindowService,
		@Inject( '$scope' ) private $scope: ng.IScope,
		@Inject( 'Meta' ) private metaService: Meta,
		@Inject( 'Api' ) api: any,
		@Inject( 'Game_Screenshot' ) private screenshotModel: any,
		@Inject( 'Game_Video' ) private videoModel: any,
		@Inject( 'Game_Package' ) private packageModel: any,
	)
	{
		const user = GJ_ENVIRONMENT === 'development' ? 'cros' : window.location.host.substr( 0, window.location.host.indexOf( '.' ) );
		const url = $location.path().substr( 1 );

		this.templates = {
			vash: {
				style: $sce.trustAsResourceUrl( '/app/vash.css' ),
				view: $sce.trustAsResourceUrl( '/app/templates/vash/vash.html' ),
			},
			redux: {
				style: $sce.trustAsResourceUrl( '/app/redux.css' ),
				view: $sce.trustAsResourceUrl( '/app/templates/redux/redux.html' ),
			},
		};

		api.sendRequest( `/sites-io/${user}/${url}` ).then( ( response: any ) => this.bootstrap( response ) );

		this.$window.addEventListener( 'message', ( event: MessageEvent ) => this.themeUpdated( event ) );
	}

	private bootstrap( response: any )
	{
		console.log( response );

		this.isLoading = false;

		this.metaService.title = 'yo';

		this.site = response.site;
		this.game = response.game;

		this.mediaItems = [];
		if ( response.mediaItems && response.mediaItems.length ) {
			response.mediaItems.forEach( ( item: any ) =>
			{
				if ( item.media_type == 'image' ) {
					this.mediaItems.push( new this.screenshotModel( item ) );
				}
				else if ( item.media_type == 'video' ) {
					this.mediaItems.push( new this.videoModel( item ) );
				}
			} );
		}

		const packageData = this.packageModel.processPackagePayload( response );
		angular.extend( this, packageData );
		this.packages = this.packages || [];
	}

	private themeUpdated( event: MessageEvent )
	{
		this.$scope.$apply( () =>
		{
			switch ( event.data.type ) {
				case 'theme-update': {

					if ( !event.data.template ) {
						return;
					}

					this.site.theme.template = event.data.template;
					return;
				};
			}
		} );
	}
}
