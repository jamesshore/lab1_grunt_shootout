#!/bin/sh

[ ! -f node_modules/.bin/grunt ] && npm rebuild
node_modules/.bin/grunt $*
