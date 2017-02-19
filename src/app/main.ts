import '../lib/gj-lib-client/utils/polyfills';
import * as Vue from 'vue';

import { store } from './store/index';
import { Payload } from '../lib/gj-lib-client/components/payload/payload-service';
import { App } from './app';
import { Loader } from '../lib/gj-lib-client/components/loader/loader.service';
import { HammerVueLoader } from '../lib/gj-lib-client/components/loader/hammer-vue-loader';
import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';

Payload.initVue( store );
Meta.titleSuffix = '';

Loader.addLoader( new HammerVueLoader() );

new Vue( {
	el: '#app',
	store,
	render: ( h ) => h( App ),
} );
