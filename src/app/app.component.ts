import { Component, Inject } from 'ng-metadata/core';
import template from 'html!./app.component.html';

import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';
import { Site } from '../lib/gj-lib-client/components/site/site-model';
import { WidgetCompiler } from '../lib/gj-lib-client/components/widget-compiler/widget-compiler-service';
import { WidgetCompilerWidgetGamePackages } from '../lib/gj-lib-client/components/widget-compiler/widget-game-packages/widget-game-packages.service';
import { WidgetCompilerWidgetGameMedia } from '../lib/gj-lib-client/components/widget-compiler/widget-game-media/widget-game-media.service';
import { WidgetCompilerWidgetGameDescription } from '../lib/gj-lib-client/components/widget-compiler/widget-game-description/widget-game-description.service';
import { SiteContentBlock } from '../lib/gj-lib-client/components/site/content-block/content-block-model';

@Component( {
	selector: 'gj-app',
	template,
} )
export class AppComponent
{
	isLoading = true;

	site: Site;
	game: any;
	mediaItems: any[];
	packages: any[];
	contentBlock: SiteContentBlock;

	// Gotta do this so that the injection process works and replaces with the
	// correct asset server.
	templates = {};

	compilerScope: ng.IScope;

	constructor(
		@Inject( '$location' ) $location: ng.ILocationService,
		@Inject( '$sce' ) $sce: ng.ISCEService,
		@Inject( '$window' ) private $window: ng.IWindowService,
		@Inject( '$scope' ) private $scope: ng.IScope,
		@Inject( 'Meta' ) private metaService: Meta,
		@Inject( 'Api' ) api: any,
		@Inject( 'WidgetCompiler' ) compiler: WidgetCompiler,
		@Inject( 'WidgetCompilerWidgetGamePackages' ) widgetPackages: WidgetCompilerWidgetGamePackages,
		@Inject( 'WidgetCompilerWidgetGameMedia' ) widgetMedia: WidgetCompilerWidgetGameMedia,
		@Inject( 'WidgetCompilerWidgetGameDescription' ) widgetDescription: WidgetCompilerWidgetGameDescription,
		@Inject( 'Site' ) private siteModel: typeof Site,
		@Inject( 'Game' ) private gameModel: any,
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

		this.$window.addEventListener( 'message', ( event: MessageEvent ) => this.message( event ) );

		compiler.setContentClass( 'content' );
		compiler.addWidget( widgetPackages );
		compiler.addWidget( widgetMedia );
		compiler.addWidget( widgetDescription );

		this.compilerScope = $scope.$new( true );
	}

	private bootstrap( response: any )
	{
		this.isLoading = false;

		this.metaService.title = 'yo';

		this.site = new this.siteModel( response.site );
		this.contentBlock = this.site.content_blocks[0];

		this.game = new this.gameModel( response.game );

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

		this.compilerScope['game'] = this.game;
		this.compilerScope['packages'] = this.packages;
		this.compilerScope['mediaItems'] = this.mediaItems;
	}

	private message( event: MessageEvent )
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

				case 'content-update': {

					if ( !event.data.block ) {
						return;
					}

					this.contentBlock.assign( event.data.block );
					return;
				};
			}
		} );
	}
}
