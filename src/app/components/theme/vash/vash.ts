import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import View from '!view!./vash.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';
import { Store } from '../../../store/index';

require('./vash.styl');

@View
@Component({
	name: 'theme-vash',
	components: {
		AppWidgetCompiler,
	},
})
export class AppThemeVash extends Vue {
	@State contentBlock: Store['contentBlock'];
	@State compilerContext: Store['compilerContext'];

	mounted() {
		document.body.className = '';
		document.body.classList.add('theme-vash');
	}
}
