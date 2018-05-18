import '../lib/gj-lib-client/utils/polyfills';
import './main.styl';

import Vue from 'vue';
import { Meta } from '../lib/gj-lib-client/components/meta/meta-service';
import { Payload } from '../lib/gj-lib-client/components/payload/payload-service';
import { App } from './app';
import { store } from './store/index';
import { AppButton } from '../lib/gj-lib-client/components/button/button';
import { AppJolticon } from '../lib/gj-lib-client/vue/components/jolticon/jolticon';

Meta.titleSuffix = '';
Payload.init(store);

// Common components.
Vue.component('AppButton', AppButton);
Vue.component('AppJolticon', AppJolticon);

const VueGettext = require('vue-gettext');
Vue.use(VueGettext, {
	silent: true,
	availableLanguages: {},
	translations: {},
});

new Vue({
	el: '#app',
	store,
	render: h => h(App),
});
