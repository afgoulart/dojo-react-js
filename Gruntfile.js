module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		'http-server': {
			'dev': {
				root: './',
				port: 8080,
				host: "0.0.0.0",
				autoIndex: true,
				ext: "html",
				runInBackground: true,
				openBrowser : true
			}
		},
		watch:{
			options: {
				livereload: false
			},
			styles: {
				files: ['**/*.css'],
				tasks: []
			},
			scripts: {
				files: ['**/*.js'],
				tasks: [],
				options: {
					livereload: true
				}
			},
			index: {
				files: ['index.html'],
				tasks: [],
				options: {
					livereload: true
				}
			},
		}
	});

	grunt.registerTask('default', ['http-server', 'watch'])
};
