module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	  jshint: {
		  browser: "src/client/**/*.js"
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

};