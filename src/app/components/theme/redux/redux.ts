import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import * as View from '!view!./redux.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';

require( './redux.styl' );

@View
@Component({
	name: 'theme-redux',
	components: {
		AppWidgetCompiler,
	}
})
export class AppThemeRedux extends Vue
{
	@State contentBlock: any;
	@State compilerContext: any;

	created()
	{
		window.document.body.className = '';
		window.document.body.classList.add( 'theme-redux' );
	}
}
