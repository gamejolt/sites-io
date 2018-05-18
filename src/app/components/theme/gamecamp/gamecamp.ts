import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import View from '!view!./gamecamp.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';
import { AppMediaBar } from '../../../../lib/gj-lib-client/components/media-bar/media-bar';
import { Screen } from '../../../../lib/gj-lib-client/components/screen/screen-service';
import { Store } from '../../../store/index';

require('./gamecamp.styl');

@View
@Component({
	name: 'theme-gamecamp',
	components: {
		AppWidgetCompiler,
		AppMediaBar,
	},
})
export class AppThemeGamecamp extends Vue {
	@State contentBlock: Store['contentBlock'];
	@State compilerContext: Store['compilerContext'];
	@State mediaItems: Store['mediaItems'];

	hasMediaBar = false;

	readonly Screen = Screen;

	mounted() {
		document.body.className = '';
		document.body.classList.add('theme-gamecamp');

		this.onCompiled();
	}

	updated() {
		this.onCompiled();
	}

	private onCompiled() {
		const mediaBar = this.$el.querySelector('.widget-compiler .media-bar');
		const mediaBarSlot = this.$el.querySelector('.gamecamp-media-bar');

		if (!mediaBarSlot || !mediaBar) {
			this.hasMediaBar = false;
			return;
		}

		mediaBarSlot.innerHTML = '';
		mediaBarSlot.appendChild(mediaBar);
		this.hasMediaBar = true;
	}
}
