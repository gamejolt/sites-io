import '../lib/gj-lib-client/utils/polyfills';
import * as Vue from 'vue';

import { store } from './store/index';
import { Payload } from '../lib/gj-lib-client/components/payload/payload-service';
import { App } from './app';
import { Loader } from '../lib/gj-lib-client/components/loader/loader.service';
import { HammerVueLoader } from '../lib/gj-lib-client/components/loader/hammer-vue-loader';
import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';
import { isPrerender } from '../lib/gj-lib-client/components/environment/environment.service';

Payload.initVue( store );
Meta.titleSuffix = '';

if ( !isPrerender ) {
	Loader.addLoader( new HammerVueLoader() );
}

const app = new Vue( {
	store,
	render: ( h ) => h( App ),
} );

export { app, store };
