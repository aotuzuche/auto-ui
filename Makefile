make:
	@echo ''

#从components中生成es6版本的js代码到es目录下
#注意：这一步执行完成后需要再执行 make es6scss
es6:
	@rm -rf components
	@rm -rf lib
	@cp -ri examples_src/src/aotuui/components components
	@node scripts/createWiki.js
	@tsc -p tsconfig.json

#把components中的scss文件拷贝到es目录下
es6scss:
	@node scripts/mvscss2es.js

#发布gh-pages分之的内容
ghpages:
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
	@gh-pages -d demo
