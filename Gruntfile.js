// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

"use strict";

var karma = require("./build/util/karma_runner.js");

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			browser: {
				options: browserLintOptions(),
				src: "src/client/**/*.js"
			},
			node: {
				options: nodeLintOptions(),
				src: ["src/*.js", "src/server/**/*.js", "build/util/**/*.js", "Jakefile.js", "Gruntfile.js"]
			}
		},

		nodeunit: {
			all: ["src/_*_test.js", "src/server/**/_*_test.js"]
		},

		karma: {
			server: {
				configFile: "build/config/karma.conf.js"
			}
		},

		runKarma: {
			// Modify (or comment out) the following list to cause the build to fail unless these browsers are tested.
			requiredBrowsers: [
				"IE 8.0.0 (Windows XP)",
				"IE 9.0.0 (Windows 7)",
				"Firefox 23.0.0 (Mac OS X 10.8)",
				"Chrome 29.0.1547 (Mac OS X 10.8.5)",
				"Safari 6.0.5 (Mac OS X 10.8.5)",
				"Mobile Safari 6.0.0 (iOS 6.1)"
			]
		}
	});

	grunt.registerTask("default", "Lint and test", ["jshint", "test"]);

	grunt.registerTask("test", "Test everything", ["nodeunit", "runKarma"]);

	grunt.registerTask("runKarma", "Test browser code", function() {
		karma.runTests(grunt.config("runKarma.requiredBrowsers"), this.async(), grunt.warn);
	});

	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");

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