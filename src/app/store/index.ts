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
	game: Game | null = null;
	mediaItems: (GameScreenshot | GameVideo | GameSketchfab)[] = [];
	sellables: Sellable[] = [];
}

export class StoreState
{
	isLoading = true;
	site: Site | null = null;
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
			state.contentBlock = state.site.content_blocks[0];
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

			Meta.title = state.site.title || state.game.title;
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
			let user;
			if ( GJ_BUILD_TYPE === 'development' ) {
				user = 'cros';
			}
			else {
				user = window.location.host.substr(
					0,
					window.location.host.indexOf( '.' ),
				);
			}

			const url = window.location.pathname.substr( 1 );
			const response = await Api.sendRequest( `/sites-io/${user}/${url}` );

			commit( Mutations.bootstrap, response );
		},
	}
} );
