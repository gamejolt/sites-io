import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';
import { Api } from '../lib/gj-lib-client/components/api/api.service';
import { GameScreenshot } from '../lib/gj-lib-client/components/game/screenshot/screenshot.model';
import { GameVideo } from '../lib/gj-lib-client/components/game/video/video.model';
import { GamePackage } from '../lib/gj-lib-client/components/game/package/package.model';
import { GameRelease } from '../lib/gj-lib-client/components/game/release/release.model';
import { Game } from '../lib/gj-lib-client/components/game/game.model';
import template from 'html!./app.component.html';
import { GameBuild } from '../lib/gj-lib-client/components/game/build/build.model';
import { GameBuildLaunchOption } from '../lib/gj-lib-client/components/game/build/launch-option/launch-option.model';
import { Sellable } from '../lib/gj-lib-client/components/sellable/sellable.model';
import { Site } from '../lib/gj-lib-client/components/site/site.model';

@Component( {
	selector: 'gj-app',
	template,
} )
export class AppComponent
{
	isLoading = true;

	site: Site;
	game: Game;
	mediaItems: (GameScreenshot | GameVideo)[];
	packages: GamePackage[];
	releases: GameRelease[];
	builds: GameBuild[];
	launchOptions: GameBuildLaunchOption[];
	sellables: Sellable[];

	// Gotta do this so that the injection process works and replaces with the
	// correct asset server.
	themes = {};

	constructor(
		private location: Location,
		private metaService: Meta,
		private api: Api,
		@Inject( Site ) private siteModel: typeof Site,
		@Inject( Game ) private gameModel: typeof Game,
		@Inject( GameScreenshot ) private screenshotModel: typeof GameScreenshot,
		@Inject( GameVideo ) private videoModel: typeof GameVideo,
		@Inject( GamePackage ) private packageModel: typeof GamePackage,
		sanitizer: DomSanitizer,
	)
	{
		this.themes = {
			vash: {
				style: sanitizer.bypassSecurityTrustResourceUrl( '/app/vash.css' ),
				template: sanitizer.bypassSecurityTrustResourceUrl( '/app/themes/vash/vash.html' ),
			},
			redux: {
				style: sanitizer.bypassSecurityTrustResourceUrl( '/app/redux.css' ),
				template: sanitizer.bypassSecurityTrustResourceUrl( '/app/themes/redux/redux.html' ),
			},
		};

		this.init();
	}

	async init()
	{
		// TODO: Check this?
		// const user = window.location.host.substr( 0, window.location.host.indexOf( '.' ) );
		const user = 'cros';
		const url = this.location.path().substr( 1 );

		const response = await this.api.sendRequest( `/web/sites/${user}/${url}` );

		this.metaService.title = 'yo';

		this.site = new this.siteModel( response.site );
		this.game = new this.gameModel( response.site.game );

		this.mediaItems = [];
		if ( response.mediaItems && response.mediaItems.length ) {
			response.mediaItems.forEach( ( item: any ) =>
			{
				if ( item.media_type === 'image' ) {
					this.mediaItems.push( new this.screenshotModel( item ) );
				}
				else if ( item.media_type === 'video' ) {
					this.mediaItems.push( new this.videoModel( item ) );
				}
			} );
		}

		const packageData = this.packageModel.processPackagePayload( response );
		Object.assign( this, packageData );
		this.packages = this.packages || [];

		this.isLoading = false;
	}
}
