// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
"use strict";

var gulp = require("gulp");

gulp.task("default", function() {
	console.log("Hi");
});


//var lint = require("./build/util/lint_runner.js");
//var nodeunit = require("./build/util/nodeunit_runner.js");
//var karma = require("./build/util/karma_runner.js");
//
//// Modify (or comment out) the following list to cause the build to fail unless these browsers are tested.
//var REQUIRED_BROWSERS = [
//	"IE 8.0.0 (Windows 7)",
//	"IE 9.0.0 (Windows 7)",
//	"Firefox 26.0.0 (Mac OS X 10.8)",
//	"Chrome 31.0.1650 (Mac OS X 10.8.5)",
//	"Safari 6.1.1 (Mac OS X 10.8.5)",
//	"Mobile Safari 7.0.0 (iOS 7.0.3)"
//];
//
//desc("Lint and test");
//task("default", ["lint", "test"], function() {
//	console.log("\n\nOK");
//});
//
//desc("Start Karma server -- run this first");
//task("karma", function() {
//	karma.serve(complete, fail);
//}, {async: true});
//
//desc("Lint everything");
//task("lint", function () {
//	var passed = lint.validateFileList(nodeFilesToLint(), nodeLintOptions(), {});
//	passed = lint.validateFileList(browserFilesToLint(), browserLintOptions(), {}) && passed;
//	if (!passed) fail("Lint failed");
//});
//
//desc("Test everything");
//task("test", ["testNode", "testClient"]);
//
//desc("Test node.js code");
//task("testNode", function() {
//	nodeunit.runTests(nodeFilesToTest(), complete, fail);
//}, {async: true});
//
//desc("Test browser code");
//task("testClient", function() {
//	karma.runTests(REQUIRED_BROWSERS, complete, fail);
//}, {async: true});
//
//function nodeFilesToTest() {
//	var testFiles = new jake.FileList();
//	testFiles.include("src/_*_test.js");
//	testFiles.include("src/server/**/_*_test.js");
//	var tests = testFiles.toArray();
//	return tests;
//}
//
//function nodeFilesToLint() {
//	var files = new jake.FileList();
//	files.include("src/*.js");
//	files.include("src/server/**/*.js");
//	files.include("build/util/**/*.js");
//	files.include("Jakefile.js");
//	files.include("Gruntfile.js");
//	return files.toArray();
//}
//
//function browserFilesToLint() {
//	var files = new jake.FileList();
//	files.include("src/client/**/*.js");
//	return files.toArray();
//}
//
//function globalLintOptions() {
//	return {
//		bitwise:true,
//		curly:false,
//		eqeqeq:true,
//		forin:true,
//		immed:true,
//		latedef:false,
//		newcap:true,
//		noarg:true,
//		noempty:true,
//		nonew:true,
//		regexp:true,
//		undef:true,
//		strict:true,
//		trailing:true
//	};
//}
//
//function nodeLintOptions() {
//	var options = globalLintOptions();
//	options.node = true;
//	return options;
//}
//
//function browserLintOptions() {
//	var options = globalLintOptions();
//	options.browser = true;
//	return options;
//}
