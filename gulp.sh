#!/bin/sh

[ ! -f node_modules/.bin/gulp ] && npm rebuild
node_modules/.bin/gulp $*
