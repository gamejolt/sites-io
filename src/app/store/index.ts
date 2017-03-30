import * as Vue from 'vue';
import * as Vuex from 'vuex';

import { appStore } from '../../lib/gj-lib-client/vue/services/app/app-store';
import { Api } from '../../lib/gj-lib-client/components/api/api.service';
import { Meta } from '../../lib/gj-lib-client/components/meta/meta-service';
import { Site } from '../../lib/gj-lib-client/components/site/site-model';
import { SiteContentBlock } from '../../lib/gj-lib-client/components/site/content-block/content-block-model';
import { Game } from '../../lib/gj-lib-client/components/game/game.model';
import { GameScreenshot } from '../../lib/gj-lib-client/components/game/screenshot/screenshot.model';
import { GameVideo } from '../../lib/gj-lib-client/components/game/video/video.model';
import { SiteTemplate } from '../../lib/gj-lib-client/components/site/template/template-model';
import { WidgetCompilerContext } from '../../lib/gj-lib-client/components/widget-compiler/widget-compiler.service';
import { Sellable } from '../../lib/gj-lib-client/components/sellable/sellable.model';
import { GameSketchfab } from '../../lib/gj-lib-client/components/game/sketchfab/sketchfab.model';
import { User } from '../../lib/gj-lib-client/components/user/user.model';

Vue.use( Vuex );

export const Mutations = {
	bootstrap: 'bootstrap',
	setTemplate: 'setTemplate',
	setContentBlock: 'setContentBlock',
};

export const Actions = {
	bootstrap: 'bootstrap',
};

class AppWidgetCompilerContext extends WidgetCompilerContext
{
	user: User | null = null;
	game: Game | null = null;
	mediaItems: (GameScreenshot | GameVideo | GameSketchfab)[] = [];
	sellables: Sellable[] = [];
	games: Game[] = [];
}

export class StoreState
{
	isLoading = true;
	site: Site | null = null;
	user: User | null = null;
	contentBlock: SiteContentBlock | null = null;
	game: Game | null = null;
	mediaItems: (GameScreenshot | GameVideo | GameSketchfab)[] = [];
	compilerContext = new AppWidgetCompilerContext();
}

export type Store = Vuex.Store<StoreState>;

export const store = new Vuex.Store<StoreState>( {
	modules: {
		app: appStore,
	},
	state: new StoreState(),
	mutations: {
		[Mutations.bootstrap]( state, response: any )
		{
			state.isLoading = false;

			state.site = new Site( response.site );
			state.user = new User( response.user );
			state.contentBlock = state.site.content_blocks[0];

			state.compilerContext.user = state.user;

			if ( response.game ) {
				state.game = new Game( response.game );

				if ( response.mediaItems && response.mediaItems.length ) {
					response.mediaItems.forEach( ( item: any ) =>
					{
						if ( item.media_type === 'image' ) {
							state.mediaItems.push( new GameScreenshot( item ) );
						}
						else if ( item.media_type === 'video' ) {
							state.mediaItems.push( new GameVideo( item ) );
						}
						else if ( item.media_type === 'sketchfab' ) {
							state.mediaItems.push( new GameSketchfab( item ) );
						}
					} );
				}

				state.compilerContext.game = state.game;
				state.compilerContext.mediaItems = state.mediaItems;
				state.compilerContext.sellables = Sellable.populate( response.sellables );
			}
			else if ( response.games ) {
				state.compilerContext.games = Game.populate( response.games );
			}

			if ( state.game ) {
				Meta.title = state.site.title || state.game.title;
			}
			else {
				Meta.title = state.site.title || state.user.display_name;
			}

			if ( state.site.description ) {
				Meta.description = state.site.description;
			}
		},
		[Mutations.setTemplate]( state, template: SiteTemplate )
		{
			state.site!.theme.template = template;
		},
		[Mutations.setContentBlock]( state, block: SiteContentBlock )
		{
			state.contentBlock!.assign( block );
		},
	},
	actions: {
		async [Actions.bootstrap]( { commit } )
		{
			let hostname = window.location.hostname;

			if ( GJ_BUILD_TYPE === 'development' ) {
				hostname = 'cros.gamejolt.io';
				// hostname = 'cros.com';
			}

			let user, domain;

			// Custom domain.
			if ( !hostname.endsWith( '.gamejolt.io' ) && !hostname.endsWith( '.indie.af' ) ) {
				domain = hostname;
			}
			else {
				user = hostname.substr(
					0,
					hostname.indexOf( '.' ),
				);
			}

			// Trim any slashes from the pathname.
			let path = window.location.pathname;
			if ( path[0] === '/' ) {
				path = path.substring( 1 );
			}
			if ( path[ path.length - 1 ] === '/' ) {
				path = path.substring( 0, path.length - 1 );
			}

			const data = {
				domain,
				user,
				path,
			};

			const response = await Api.sendRequest( `/sites-io`, data );

			commit( Mutations.bootstrap, response );
		},
	}
} );
