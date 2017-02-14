import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import * as View from '!view!./redux.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';
import { AppMediaBar } from '../../../../lib/gj-lib-client/components/media-bar/media-bar';

require( './redux.styl' );

@View
@Component({
	name: 'theme-redux',
	components: {
		AppWidgetCompiler,
		AppMediaBar,
	}
})
export class AppThemeRedux extends Vue
{
	@State contentBlock: any;
	@State compilerContext: any;
	@State mediaItems: any;
}
