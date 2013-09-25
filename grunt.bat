@echo off
if not exist node_modules\.bin\grunt.cmd call npm rebuild
node_modules\.bin\grunt %*
