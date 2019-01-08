## [0.1.24](https://github.com/aotuzuche/auto-ui/compare/v0.1.23...v0.1.24) (2019-01-08)


### Bug Fixes

* **Navbar:** 提高 z-index ([d66a2db](https://github.com/aotuzuche/auto-ui/commit/d66a2db))



## [0.1.23](https://github.com/aotuzuche/auto-ui/compare/v0.1.22...v0.1.23) (2019-01-08)


### Bug Fixes

* **Navbar:** 替换成设计的图标 ([0462163](https://github.com/aotuzuche/auto-ui/commit/0462163))



## [0.1.22](https://github.com/aotuzuche/auto-ui/compare/v0.1.21...v0.1.22) (2019-01-08)


### Bug Fixes

* **Navbar:** 增加透明模式和阴影 ([2462112](https://github.com/aotuzuche/auto-ui/commit/2462112))



## [0.1.21](https://github.com/aotuzuche/auto-ui/compare/v0.1.20...v0.1.21) (2019-01-08)


### Bug Fixes

* **Navbar:** 修复样式和右侧按钮默认值的 bug ([50f8e69](https://github.com/aotuzuche/auto-ui/commit/50f8e69))



## [0.1.20](https://github.com/aotuzuche/auto-ui/compare/v0.1.9...v0.1.20) (2019-01-08)


### Performance Improvements

* 升级依赖 autos-libs 的版本 ([316b93a](https://github.com/aotuzuche/auto-ui/commit/316b93a))



## [0.1.9](https://github.com/aotuzuche/auto-ui/compare/v0.1.8...v0.1.9) (2019-01-08)


### Features

* **Navbar:** 增加深色模式，修改了图标，增加了易用性 ([942cfe5](https://github.com/aotuzuche/auto-ui/commit/942cfe5))



## [0.1.8](https://github.com/aotuzuche/auto-ui/compare/v0.1.7...v0.1.8) (2018-12-05)


### Bug Fixes

* **Input:** fix textarea 模式下没有使用 addonBefore 和 addonAfter ([e0868a8](https://github.com/aotuzuche/auto-ui/commit/e0868a8))



## [0.1.7](https://github.com/aotuzuche/auto-ui/compare/v0.1.6...v0.1.7) (2018-12-04)


### Bug Fixes

* **Dialog:** 修复 ios8.1.1 的 iphone5 撑不开内容区域 ([a85124f](https://github.com/aotuzuche/auto-ui/commit/a85124f))



## [0.1.6](https://github.com/aotuzuche/auto-ui/compare/v0.1.5...v0.1.6) (2018-11-06)


### Bug Fixes

* **Input:** 修改成 Class 写法 ([61769ed](https://github.com/aotuzuche/auto-ui/commit/61769ed))
* **Popup:** 修复了错误使用生命周期导致不正常的创建 ([5c5a07b](https://github.com/aotuzuche/auto-ui/commit/5c5a07b))



## [0.1.5](https://github.com/aotuzuche/auto-ui/compare/v0.1.4...v0.1.5) (2018-11-02)


### Bug Fixes

* **Loading:** 修复创建多次只能关闭一个的 bug ([4f01437](https://github.com/aotuzuche/auto-ui/commit/4f01437))



## [0.1.4](https://github.com/aotuzuche/auto-ui/compare/v0.1.3...v0.1.4) (2018-11-01)


### Performance Improvements

* **Layout.Body:** 增加 onScroll 事件 ([99b50eb](https://github.com/aotuzuche/auto-ui/commit/99b50eb))



## [0.1.3](https://github.com/aotuzuche/auto-ui/compare/v0.1.2...v0.1.3) (2018-11-01)


### Performance Improvements

* **popup:** 修改popup组件，新增local属性 ([1f343c9](https://github.com/aotuzuche/auto-ui/commit/1f343c9))



## [0.1.2](https://github.com/aotuzuche/auto-ui/compare/v0.1.1...v0.1.2) (2018-11-01)


### Features

* **Layout:** Layout 组件支持 iphoneX 页面显示, 并且增加上拉刷新支持 ([b7db916](https://github.com/aotuzuche/auto-ui/commit/b7db916))
* Loading 组件增加 hide 方法帮助关闭 ([1d6df4a](https://github.com/aotuzuche/auto-ui/commit/1d6df4a))


### Performance Improvements

* **A 组件:** 去掉 report js 文件，直接引用 auto-libs 使用 ([a1feafd](https://github.com/aotuzuche/auto-ui/commit/a1feafd))
* 增加全局和手动按需导入组件功能 ([8fdf8ac](https://github.com/aotuzuche/auto-ui/commit/8fdf8ac))



## [0.1.1](https://github.com/aotuzuche/auto-ui/compare/v0.1.0...v0.1.1) (2018-10-18)


### Bug Fixes

* Alert 关闭添加回调函数, 修复 Toast.show -> Toast ([16be175](https://github.com/aotuzuche/auto-ui/commit/16be175))
* 修复 Alert 组件关闭样式动画 bug ([f392874](https://github.com/aotuzuche/auto-ui/commit/f392874))
* 修复 Cell 组件点击样式判断 bug ([8686a9e](https://github.com/aotuzuche/auto-ui/commit/8686a9e))
* 修复 Toast 组件出现多个的 bug ([dbf1281](https://github.com/aotuzuche/auto-ui/commit/dbf1281))



# [0.1.0](https://github.com/aotuzuche/auto-ui/compare/v0.0.9...v0.1.0) (2018-10-18)


### Bug Fixes

* action-sheet组件优化，去掉子组件结构，去掉 onbgclick 属性，蒙城默认点击关闭，增加 items 来设置子组件 ([7533a80](https://github.com/aotuzuche/auto-ui/commit/7533a80))
* gitignore 中忽略掉无用的提交文件（docs/dist） ([225d5ed](https://github.com/aotuzuche/auto-ui/commit/225d5ed))
* 修复 NavBar 导航栏 title 不居中，编写对应的文档 ([2d22983](https://github.com/aotuzuche/auto-ui/commit/2d22983))
* 修复文档中的 iframe 顶部导航连接超出换行导致样式变形 ([de536f9](https://github.com/aotuzuche/auto-ui/commit/de536f9))
* **package.json:** 加上 commit msg 验证，修复 release 的命令路径 ([ff0f88a](https://github.com/aotuzuche/auto-ui/commit/ff0f88a))
* **release.sh:** release 的时候 commit 信息不是验证的 ([20f279e](https://github.com/aotuzuche/auto-ui/commit/20f279e))


### Features

* docs 增加版本号 ([8db67d7](https://github.com/aotuzuche/auto-ui/commit/8db67d7))
* 增加 commitizen, git-cz 和 conventional-changelog 来规范 commit 和 changelog ([7edb546](https://github.com/aotuzuche/auto-ui/commit/7edb546))
* 添加使用须知页面，修改 Alert 的使用（50%） ([4b4ca09](https://github.com/aotuzuche/auto-ui/commit/4b4ca09))


### Performance Improvements

* 优化 Alert 组件，修改调用的 API，扩展功能简化写法 ([22e65d4](https://github.com/aotuzuche/auto-ui/commit/22e65d4))
* 优化 Button 组件，去掉一些无用的代码 ([91891b1](https://github.com/aotuzuche/auto-ui/commit/91891b1))
* 优化 Cell 组件的代码 ([945b008](https://github.com/aotuzuche/auto-ui/commit/945b008))
* 优化 dialog 组件，晚上文档，去除无用代码缩小体积，改善交互 ([0be0eca](https://github.com/aotuzuche/auto-ui/commit/0be0eca))
* 优化 Input 组件 ([61233b0](https://github.com/aotuzuche/auto-ui/commit/61233b0))
* 优化 Layout 布局组件，优化文档使用说明 ([64e73bd](https://github.com/aotuzuche/auto-ui/commit/64e73bd))
* 优化 Loading 组件，编写文档，去掉无用的 api ([5848a5d](https://github.com/aotuzuche/auto-ui/commit/5848a5d))
* 优化 Popup 弹出层组件，编写文档，修复手机模拟器示例不能刷新的 bug ([d46f34f](https://github.com/aotuzuche/auto-ui/commit/d46f34f))
* 优化 Radio 单选框组件，编写对应的文档 ([a6c995a](https://github.com/aotuzuche/auto-ui/commit/a6c995a))
* 优化 Spin 加载组件，去除无用的代码，编写对应的文档 ([d47b8e3](https://github.com/aotuzuche/auto-ui/commit/d47b8e3))
* 优化 Switch 开关组件代码，编写对应文档 ([5515f16](https://github.com/aotuzuche/auto-ui/commit/5515f16))
* 优化 Tabs 标签页组件代码，编写对应的文档 ([c2ac582](https://github.com/aotuzuche/auto-ui/commit/c2ac582))
* 优化 Toast 轻提示组件，去掉无用的代码，编写对应的文档 ([4654b64](https://github.com/aotuzuche/auto-ui/commit/4654b64))
* 去掉 Modal 作为公用组件 ([6f500fc](https://github.com/aotuzuche/auto-ui/commit/6f500fc))



## [0.0.9](https://github.com/aotuzuche/auto-ui/compare/v0.0.4...v0.0.9) (2018-09-26)



## [0.0.4](https://github.com/aotuzuche/auto-ui/compare/v0.0.3...v0.0.4) (2018-09-26)



## 0.0.3 (2018-09-26)



