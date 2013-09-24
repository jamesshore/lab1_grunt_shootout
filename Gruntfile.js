"use strict";

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			browser: {
				options: browserLintOptions(),
				files: {
					src: "src/client/**/*.js"
				}
			},
			node: {
				options: nodeLintOptions(),
				files: {
					src: ["src/*.js", "src/server/**/*.js", "build/util/**/*.js", "Gruntfile.js"]
				}
			}
		}


//    pkg: grunt.file.readJSON('package.json'),
//    uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    }
	});

//  // Load the plugin that provides the "uglify" task.
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//
//  // Default task(s).
//  grunt.registerTask('default', ['uglify']);

	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", "Default Description", ["jshint"], function() {
		console.log("\n\nOK");
	});

	function globalLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: false,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true
		};
	}

	function nodeLintOptions() {
		var options = globalLintOptions();
		options.node = true;
		return options;
	}

	function browserLintOptions() {
		var options = globalLintOptions();
		options.browser = true;
		return options;
	}

};