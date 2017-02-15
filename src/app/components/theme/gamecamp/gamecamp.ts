import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import * as View from '!view!./gamecamp.html';

import { AppWidgetCompiler } from '../../../../lib/gj-lib-client/components/widget-compiler/widget-compiler';
import { AppMediaBar } from '../../../../lib/gj-lib-client/components/media-bar/media-bar';
import { Screen } from '../../../../lib/gj-lib-client/components/screen/screen-service';
import { makeObservableService } from '../../../../lib/gj-lib-client/utils/vue';

require( './gamecamp.styl' );

@View
@Component({
	name: 'theme-gamecamp',
	components: {
		AppWidgetCompiler,
		AppMediaBar,
	}
})
export class AppThemeGamecamp extends Vue
{
	@State contentBlock: any;
	@State compilerContext: any;
	@State mediaItems: any[];

	Screen = makeObservableService( Screen );
}
