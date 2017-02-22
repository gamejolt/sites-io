import * as Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import * as View from '!view!./app.html';

import { Actions, Mutations, Store } from './store/index';
import { State } from 'vuex-class';
import { Site } from '../lib/gj-lib-client/components/site/site-model';
import { SiteContentBlock } from '../lib/gj-lib-client/components/site/content-block/content-block-model';
import { AppThemeInjector } from '../lib/gj-lib-client/components/theme/injector/injector';
import { Analytics } from '../lib/gj-lib-client/components/analytics/analytics.service';
import { WidgetCompiler } from '../lib/gj-lib-client/components/widget-compiler/widget-compiler.service';
import { WidgetCompilerWidgetUserBio } from '../lib/gj-lib-client/components/widget-compiler/widget-user-bio/widget-user-bio.service';
import { WidgetCompilerWidgetGameMedia } from '../lib/gj-lib-client/components/widget-compiler/widget-game-media/widget-game-media.service';
import { WidgetCompilerWidgetGameDescription } from '../lib/gj-lib-client/components/widget-compiler/widget-game-description/widget-game-description.service';
import { WidgetCompilerWidgetGameList } from '../lib/gj-lib-client/components/widget-compiler/widget-game-list/widget-game-list.service';
import { WidgetCompilerWidgetGamePackages } from '../lib/gj-lib-client/components/widget-compiler/widget-game-packages/widget-game-packages.service';
import { Game } from '../lib/gj-lib-client/components/game/game.model';
import { isPrerender } from '../lib/gj-lib-client/components/environment/environment.service';

@View
@Component({
	name: 'app',
	components: {
		AppThemeInjector,
	},
})
export class App extends Vue
{
	@State isLoading: boolean;
	@State site: Site;
	@State game: Game;
	@State contentBlock: SiteContentBlock;

	theme: typeof Vue | null = null;

	static preFetch( store: Store )
	{
		return store.dispatch( Actions.bootstrap );
	}

	async created()
	{
		WidgetCompiler.setContentClass( 'content' );
		App.preFetch( this.$store );
	}

	@Watch( 'site' )
	onSiteBootstrapped()
	{
		if ( this.game ) {
			WidgetCompiler.addWidget( new WidgetCompilerWidgetGameMedia() );
			WidgetCompiler.addWidget( new WidgetCompilerWidgetGameDescription() );
			WidgetCompiler.addWidget( new WidgetCompilerWidgetGamePackages() );
		}
		else {
			WidgetCompiler.addWidget( new WidgetCompilerWidgetUserBio() );
			WidgetCompiler.addWidget( new WidgetCompilerWidgetGameList() );
		}

		if ( !isPrerender ) {
			window.addEventListener( 'message', ( event ) => this.message( event ) );
		}
	}

	@Watch( 'site.theme.template.key' )
	async onThemeChange( theme: string )
	{
		if ( theme === 'vash' ) {
			const mod = await $import<any>( './components/theme/vash/vash' );
			this.theme = mod.AppThemeVash;
		}
		else if ( theme === 'redux' ) {
			const mod = await $import<any>( './components/theme/redux/redux' );
			this.theme = mod.AppThemeRedux;
		}
		else if ( theme === 'gamecamp' ) {
			const mod = await $import<any>( './components/theme/gamecamp/gamecamp' );
			this.theme = mod.AppThemeGamecamp;
		}
	}

	@Watch( 'site.ga_tracking_id' )
	onTrackingId( id?: string )
	{
		if ( id ) {
			(window as any).ga( 'create', id, 'auto' );
			Analytics.trackPageview();
		}
	}

	private message( event: MessageEvent )
	{
		switch ( event.data.type ) {
			case 'theme-update':

				if ( !event.data.template ) {
					break;
				}

				this.$store.commit( Mutations.setTemplate, event.data.template );
				break;

			case 'content-update':

				if ( !event.data.block ) {
					break;
				}

				this.$store.commit( Mutations.setContentBlock, event.data.block );
				break;
		}
	}
}
