#!/bin/sh

yarn
sh node_modules/react-scripts-auto/bin/before-build.sh 'test'
yarn __test
sh node_modules/react-scripts-auto/bin/after-build.sh 'test'
