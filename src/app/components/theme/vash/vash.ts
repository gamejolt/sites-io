import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import * as View from '!view!./vash.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';

require( './vash.styl' );

@View
@Component({
	name: 'theme-vash',
	components: {
		AppWidgetCompiler,
	}
})
export class AppThemeVash extends Vue
{
	@State contentBlock: any;
	@State compilerContext: any;

	created()
	{
		window.document.body.className = '';
		window.document.body.classList.add( 'theme-vash' );
	}
}
