import '../lib/gj-lib-client/utils/polyfills';
import * as Vue from 'vue';

import { store } from './store/index';
import { Payload } from '../lib/gj-lib-client/components/payload/payload-service';
import { App } from './app';
import { Loader } from '../lib/gj-lib-client/components/loader/loader.service';
import { HammerVueLoader } from '../lib/gj-lib-client/components/loader/hammer-vue-loader';
import { WidgetCompiler } from '../lib/gj-lib-client/components/widget-compiler/widget-compiler.service';
import { WidgetCompilerWidgetGameMedia } from '../lib/gj-lib-client/components/widget-compiler/widget-game-media/widget-game-media.service';
import { WidgetCompilerWidgetGameDescription } from '../lib/gj-lib-client/components/widget-compiler/widget-game-description/widget-game-description.service';
import { WidgetCompilerWidgetGamePackages } from '../lib/gj-lib-client/components/widget-compiler/widget-game-packages/widget-game-packages.service';
import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';

Payload.initVue( store );
Meta.titleSuffix = '';

Loader.addLoader( new HammerVueLoader() );

WidgetCompiler.setContentClass( 'content' );
WidgetCompiler.addWidget( new WidgetCompilerWidgetGameMedia() );
WidgetCompiler.addWidget( new WidgetCompilerWidgetGameDescription() );
WidgetCompiler.addWidget( new WidgetCompilerWidgetGamePackages() );

new Vue( {
	el: '#app',
	store,
	render: ( h ) => h( App ),
} );
