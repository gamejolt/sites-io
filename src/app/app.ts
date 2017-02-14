import * as Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import * as View from '!view!./app.html';

import { Actions, Mutations } from './store/index';
import { State } from 'vuex-class';
import { Site } from '../lib/gj-lib-client/components/site/site-model';
import { SiteContentBlock } from '../lib/gj-lib-client/components/site/content-block/content-block-model';
import { AppThemeInjector } from '../lib/gj-lib-client/components/theme/injector/injector';

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
	@State contentBlock: SiteContentBlock;

	theme: typeof Vue | null = null;

	async created()
	{
		this.$store.dispatch( Actions.bootstrap );
		window.addEventListener( 'message', ( event ) => this.message( event ) );
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
