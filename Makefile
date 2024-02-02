make:
	@echo ''

cp-auto-ui:
	@rm -rf components
	@rm -rf lib
	@cp -ri examples_src/src/auto-ui/components components

#从components中生成es6版本的js代码到es目录下
es6:
	@tsc -p tsconfig.json --noEmit
	@node scripts/mvscss2es.js
	@gulp es

#从components中生成commonjs版本的js代码到lib目录下
commonjs:
	@tsc -p tsconfig.json --outDir lib --module commonjs --noEmit
	@node scripts/mvscss2es.js --styleDir=lib
	@gulp

wiki:
	@node scripts/createWiki.js

#发布gh-pages分之的内容
ghpages:
	@node scripts/createWiki.js
	@cd wiki_src && yarn
	@cd wiki_src && npm run build
	@rm -rf demo
	@cp -ri wiki_src/build demo
	@cd examples_src && yarn
	@cd examples_src && npm run build
	@cp -ri examples_src/build demo/examples
	@git add .
	@git commit -am 'update: gh-pages'
	@git pull && git push
	@git subtree push --prefix=demo origin gh-pages

#同时打包es和commonjs
build:
	@make cp-auto-ui
	@make es6
	@make commonjs
