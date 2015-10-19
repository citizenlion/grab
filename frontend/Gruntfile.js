//////////////////////////////////////////////////////////////////////
// Build process for frontend
//////////////////////////////////////////////////////////////////////
"use strict";

module.exports = function (grunt) {

	// Cordova project will be generated in this directory
	var buildDir = "target";

	// Build targets
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['clean', 'copy']);

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');

	grunt.initConfig({
		clean: {
			all: [buildDir],
		},
		mkdir: {
			all: {
				options: {
					create: [buildDir],
				},
			},
		},
		copy: {
			all: {
				expand: true,
				cwd: 'src',
				src: ['config.xml', 'hooks/**', 'www/**'],
				dest: buildDir,
			},
		},
	});

};
