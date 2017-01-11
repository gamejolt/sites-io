var gulp = require( 'gulp' );

var config = {
	staticCdn: 'https://sites-io.gjcdn.net',
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
		'src/app/templates/vash/vash.styl',
		'src/app/templates/redux/redux.styl',
	]
};

require( './src/lib/gj-lib-client/gulp/tasks/common.js' )( config );
