var gulp = require( 'gulp' );

var config = {
	staticCdn: 'http://sites.development.gamejolt.io',
	// extraBower: {
	// 	'angular-bootstrap': [
	// 		'src/transition/transition.js',
	// 		'src/position/position.js',
	// 		'src/bindHtml/bindHtml.js',
	// 		'src/tooltip/tooltip.js',
	// 		'src/collapse/collapse.js',
	// 		'src/modal/modal.js'
	// 	],
	// },
	rollup: {
		vendor: {
			'@angular/core': 'vendor.ng_core',
			'@angular/common': 'vendor.ng_common',
			'@angular/forms': 'vendor.ng_forms',
			'@angular/platform-browser': 'vendor.ng_platformBrowser',
			'@angular/platform-browser-dynamic': 'vendor.ng_platformBrowserDynamic',
			'@angular/http': 'vendor.ng_http',
		},
	},
	extraStyles: [
		'src/app/themes/vash/vash.styl',
		'src/app/themes/redux/redux.styl',
	]
};

require( './src/lib/gj-lib-client/gulp/tasks/common.js' )( config );
