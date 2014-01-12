@echo off
if not exist node_modules\.bin\gulp.cmd call npm rebuild
node_modules\.bin\gulp %*
