var gulp = require('gulp');

var config = {
	staticCdn: 'https://s.gjcdn.net/sites-io',
	port: 8090,
	sections: {
		app: {}
	}
};

require('./src/lib/gj-lib-client/gulp/tasks/common.js')(config, __dirname);
