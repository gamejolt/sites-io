var gulp = require( 'gulp' );

var config = {
	staticCdn: 'http://sites.development.gamejolt.io',
	extraBower: {
		'angular-bootstrap': [
			'src/transition/transition.js',
			'src/position/position.js',
			'src/bindHtml/bindHtml.js',
			'src/tooltip/tooltip.js',
			'src/collapse/collapse.js',
			'src/modal/modal.js'
		],
	},
	rollup: {
		vendor: {
			'ng-metadata/core': 'vendor.ngMetadata_core',
			'ng-metadata/platform': 'vendor.ngMetadata_platform',
		},
	},
	extraStyles: [
		'src/app/themes/vash/vash.styl',
		'src/app/themes/redux/redux.styl',
	]
};

require( './src/lib/gj-lib-client/gulp/tasks/common.js' )( config );
