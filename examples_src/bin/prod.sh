#!/bin/sh

yarn
sh node_modules/react-scripts-auto/bin/before-build.sh
yarn __build
sh node_modules/react-scripts-auto/bin/after-build.sh
