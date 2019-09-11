# NavBar 导航栏

## 基本使用

code=[基本使用](nav-bar)

**由于其所有功能都能在Layout.Header中实现，所以之后将不维护该组件，请及时替换**

## 支持属性

| 属性       | 说明             | 类型                                | 默认值     |
| ---------- | ---------------- | ----------------------------------- | ---------- |
| title      | 标题             | `ReactNode`                         | ''         |
| leftBtn    | 是否显示左侧按钮 | `ReactNode`                         | false      |
| rightBtn   | 是否显示右侧按钮 | `ReactNode`                         | false      |
| leftClick  | 点击左侧按钮触发 | `MouseEventHandler<HTMLDivElement>` | 返回上一页 |
| rightClick | 点击右侧按钮触发 | `MouseEventHandler<HTMLDivElement>` | M 站首页   |
| dark       | 黑色主题         | boolean                             | false      |
