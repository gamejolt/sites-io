import {
	VuexStore,
	VuexModule,
	VuexMutation,
	VuexAction,
} from '../../lib/gj-lib-client/utils/vuex';
import {
	AppStore,
	Mutations as AppMutations,
	Actions as AppActions,
	appStore,
} from '../../lib/gj-lib-client/vue/services/app/app-store';
import { SiteTemplate } from '../../lib/gj-lib-client/components/site/template/template-model';
import { SiteContentBlock } from '../../lib/gj-lib-client/components/site/content-block/content-block-model';
import { WidgetCompilerContext } from '../../lib/gj-lib-client/components/widget-compiler/widget-compiler.service';
import { User } from '../../lib/gj-lib-client/components/user/user.model';
import { Game } from '../../lib/gj-lib-client/components/game/game.model';
import { GameScreenshot } from '../../lib/gj-lib-client/components/game/screenshot/screenshot.model';
import { GameVideo } from '../../lib/gj-lib-client/components/game/video/video.model';
import { GameSketchfab } from '../../lib/gj-lib-client/components/game/sketchfab/sketchfab.model';
import { Sellable } from '../../lib/gj-lib-client/components/sellable/sellable.model';
import { Site } from '../../lib/gj-lib-client/components/site/site-model';
import { Meta } from '../../lib/gj-lib-client/components/meta/meta-service';
import { Api } from '../../lib/gj-lib-client/components/api/api.service';

export type Actions = AppActions & {
	bootstrap: any;
};

export type Mutations = AppMutations & {
	_bootstrap: any;
	setTemplate: SiteTemplate;
	setContentBlock: SiteContentBlock;
};

class AppWidgetCompilerContext extends WidgetCompilerContext {
	user: User | null = null;
	game: Game | null = null;
	mediaItems: (GameScreenshot | GameVideo | GameSketchfab)[] = [];
	sellables: Sellable[] = [];
	games: Game[] = [];
}

@VuexModule({
	store: true,
	modules: {
		app: appStore,
	},
})
export class Store extends VuexStore<Store, Actions, Mutations> {
	app: AppStore;

	isLoading = true;
	site: Site | null = null;
	user: User | null = null;
	contentBlock: SiteContentBlock | null = null;
	game: Game | null = null;
	mediaItems: (GameScreenshot | GameVideo | GameSketchfab)[] = [];
	compilerContext = new AppWidgetCompilerContext();

	@VuexAction
	async bootstrap() {
		let hostname = window.location.hostname;

		if (GJ_BUILD_TYPE === 'development') {
			hostname = 'cros.gamejolt.io';
		}

		let user, domain;

		// Custom domain.
		if (!hostname.endsWith('.gamejolt.io') && !hostname.endsWith('.indie.af')) {
			domain = hostname;
		} else {
			user = hostname.substr(0, hostname.indexOf('.'));
		}

		// Trim any slashes from the pathname.
		let path = window.location.pathname;
		if (path[0] === '/') {
			path = path.substring(1);
		}
		if (path[path.length - 1] === '/') {
			path = path.substring(0, path.length - 1);
		}

		const data = {
			domain,
			user,
			path,
		};

		const response = await Api.sendRequest(`/sites-io`, data);
		this._bootstrap(response);
	}

	@VuexMutation
	private _bootstrap(response: Mutations['_bootstrap']) {
		this.isLoading = false;

		this.site = new Site(response.site);
		this.user = new User(response.user);
		this.contentBlock = this.site.content_blocks[0];

		this.compilerContext.user = this.user;

		if (response.game) {
			this.game = new Game(response.game);

			if (response.mediaItems && response.mediaItems.length) {
				response.mediaItems.forEach((item: any) => {
					if (item.media_type === 'image') {
						this.mediaItems.push(new GameScreenshot(item));
					} else if (item.media_type === 'video') {
						this.mediaItems.push(new GameVideo(item));
					} else if (item.media_type === 'sketchfab') {
						this.mediaItems.push(new GameSketchfab(item));
					}
				});
			}

			this.compilerContext.game = this.game;
			this.compilerContext.mediaItems = this.mediaItems;
			this.compilerContext.sellables = Sellable.populate(response.sellables);
		} else if (response.games) {
			this.compilerContext.games = Game.populate(response.games);
		}

		if (this.game) {
			Meta.title = this.site.title || this.game.title;
		} else {
			Meta.title = this.site.title || this.user.display_name;
		}

		if (this.site.description) {
			Meta.description = this.site.description;
		}
	}

	@VuexMutation
	setTemplate(template: Mutations['setTemplate']) {
		if (this.site) {
			this.site.theme.template = template;
		}
	}

	@VuexMutation
	setContentBlock(block: Mutations['setContentBlock']) {
		if (this.contentBlock) {
			this.contentBlock.assign(block);
		}
	}
}

export const store = new Store();
