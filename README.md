# AUTO-UI

凹凸 React 移动端公用组件, 旨在快速开发，节省业务开发时间.

## 特点

- [x] 包含常用的移动端组件
- [x] 基本可靠的文档
- [x] 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 按需导入
- [x] 支持美好的交互体验
- [x] TypeScript 支持
- [ ] 更完善的文档来支持美滋滋的开发体验
- [ ] 单元测试
- [ ] 还有很多

## 浏览器支持

Android 4.4+, iOS 8+

## 开发

请在 dev 分支上面切分支开发，开发完成之后合并到 dev 分支并测试

## 如何本地测试

- cd examples_src
- yarn start
- 进入 auto-ui，修改相应的组件
- 进入 pages 页面，调用修改的组件即可

## 如何生成编译

在根目录下面执行：

```
  make es6
```

会自动生成相应的文件到 components、es、libs 中

将文档发布到 GitHub

```
  make ghpages
```

## 如何发布

```bash
  git add .
  npm run commit
  git push
  git checkout dev
  git merge/rebase xxxx
  git push
  // test
  git checkout master
  git push
  npm run np
```
