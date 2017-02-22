import { app } from './bootstrap';

// // prime the store with server-initialized state.
// // the state is determined during SSR and inlined in the page markup.
// store.replaceState(window.__INITIAL_STATE__)
console.log( window.__INITIAL_STATE__ );

app.$mount( '#app' );
