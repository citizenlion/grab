//////////////////////////////////////////////////////////////////////
// Build process for frontend
//////////////////////////////////////////////////////////////////////
"use strict";

module.exports = function (grunt) {

	// Cordova project will be generated in this directory
	var buildDir = "target";

	// Build targets
	grunt.registerTask('default', ['clean', 'build']);
	grunt.registerTask('build', ['copy', 'less']);

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
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
				src: ['config.xml', 'hooks/**', 'www/**', '!**/*.less'],
				dest: buildDir,
			},
		},
		less: {
			options: {
				paths: ['src'],
				ieCompat: false,
				strictMath: true,
				strictUnits: true,
			},
			all: {
				expand: true,
				cwd: 'src',
				src: ['www/**/*.less'],
				dest: buildDir,
				ext: '.css',
			},
		},
	});

};
