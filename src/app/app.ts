import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import View from '!view!./app.html';

import { State, Action, Mutation } from 'vuex-class';
import { Site } from '../lib/gj-lib-client/components/site/site-model';
import { AppThemeInjector } from '../lib/gj-lib-client/components/theme/injector/injector';
import { Analytics } from '../lib/gj-lib-client/components/analytics/analytics.service';
import { WidgetCompiler } from '../lib/gj-lib-client/components/widget-compiler/widget-compiler.service';
import { WidgetCompilerWidgetUserBio } from '../lib/gj-lib-client/components/widget-compiler/widget-user-bio/widget-user-bio.service';
import { WidgetCompilerWidgetGameMedia } from '../lib/gj-lib-client/components/widget-compiler/widget-game-media/widget-game-media.service';
import { WidgetCompilerWidgetGameDescription } from '../lib/gj-lib-client/components/widget-compiler/widget-game-description/widget-game-description.service';
import { WidgetCompilerWidgetGameList } from '../lib/gj-lib-client/components/widget-compiler/widget-game-list/widget-game-list.service';
import { WidgetCompilerWidgetGamePackages } from '../lib/gj-lib-client/components/widget-compiler/widget-game-packages/widget-game-packages.service';
import { Store } from './store/index';
import { SiteTemplate } from '../lib/gj-lib-client/components/site/template/template-model';
import { AppTheme } from '../lib/gj-lib-client/components/theme/theme';

@View
@Component({
	name: 'app',
	components: {
		AppThemeInjector,
		AppTheme,
	},
})
export class App extends Vue {
	@State isLoading: Store['isLoading'];
	@State site: Store['site'];
	@State user: Store['user'];
	@State game: Store['game'];
	@State contentBlock: Store['contentBlock'];

	@Action bootstrap: Store['bootstrap'];
	@Mutation setTemplate: Store['setTemplate'];
	@Mutation setContentBlock: Store['setContentBlock'];

	siteTheme: typeof Vue | null = null;

	/**
	 * The theme chosen for their user/game.
	 */
	get theme() {
		if (this.game) {
			return this.game.theme || null;
		} else if (this.user) {
			return this.user.theme || null;
		}

		return null;
	}

	created() {
		WidgetCompiler.setContentClass('content');
		this.bootstrap();
	}

	@Watch('site')
	onSiteBootstrapped() {
		if (this.game) {
			WidgetCompiler.addWidget(new WidgetCompilerWidgetGameMedia());
			WidgetCompiler.addWidget(new WidgetCompilerWidgetGameDescription());
			WidgetCompiler.addWidget(new WidgetCompilerWidgetGamePackages());
		} else {
			WidgetCompiler.addWidget(new WidgetCompilerWidgetUserBio());
			WidgetCompiler.addWidget(new WidgetCompilerWidgetGameList());
		}

		window.addEventListener('message', event => this.message(event));
	}

	@Watch('site.theme.template.key')
	async onThemeChange(theme: SiteTemplate['key']) {
		if (theme === 'vash') {
			const mod = await import(/* webpackChunkName: "ThemeVash" */ './components/theme/vash/vash');
			this.siteTheme = mod.AppThemeVash;
		} else if (theme === 'redux') {
			const mod = await import(/* webpackChunkName: "ThemeRedux" */ './components/theme/redux/redux');
			this.siteTheme = mod.AppThemeRedux;
		} else if (theme === 'gamecamp') {
			const mod = await import(/* webpackChunkName: "ThemeGamecamp" */ './components/theme/gamecamp/gamecamp');
			this.siteTheme = mod.AppThemeGamecamp;
		}
	}

	@Watch('site.ga_tracking_id')
	onTrackingId(id: Site['ga_tracking_id']) {
		if (id) {
			(window as any).ga('create', id, 'auto');
			Analytics.trackPageview();
		}
	}

	private message(event: MessageEvent) {
		switch (event.data.type) {
			case 'theme-update':
				if (!event.data.template) {
					break;
				}

				this.setTemplate(event.data.template);
				break;

			case 'content-update':
				if (!event.data.block) {
					break;
				}

				this.setContentBlock(event.data.block);
				break;
		}
	}
}
