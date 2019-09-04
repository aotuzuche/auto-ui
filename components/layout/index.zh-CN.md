# Layout 布局

包括 3 个部分，`Header`、`Body`和`Footer`，用于页面结构最外层

## 基本使用

code=[基本使用](layout)

## 回首页按钮

回首页按钮默认回到当前域名下的/m/index，你也可以用onHomepageButtonClick方法重写事件

**onHomepageButtonClick可以直接写一个域名，也可以写个回调方法来处理**

code=[homepage button](layout_header_homepage)

## 高级导航

code=[header](layout_header)

## 透明头

code=[ghost header](layout_ghost)

## headline 模式

code=[headline header](layout_headline)

## Loading

code=[loading](layout_loading)

## Header 的 border 类型

code=[header border](layout_border_type)

## 错误信息展示

code=[errorInfo](layout_error_info)

## 到达底部

code=[onReachBottom](layout_reach_bottom)

## Layout 支持属性

| 属性                | 说明               | 类型   | 默认值 |
| ------------------- | ------------------ | ------ | ------ |
| topSafeAreaColor    | 头部安全区域的颜色 | String | white  |
| bottomSafeAreaColor | 底部安全区域的颜色 | String | white  |

## Layout.Header 支持属性

| 属性                  | 说明                                               | 类型                 | 默认值 |
| --------------------- | -------------------------------------------------- | -------------------- | ------ |
| title                 | 标题                                               | String               | -      |
| ghost                 | 透明模式，一般用在个人主页之类的顶部               | Boolean              | false  |
| leading               | 大字标题模式，即标题非常大的那种                   | Boolean              | false  |
| addonBefore           | 左侧挂载                                           | Component            | -      |
| onBackClick           | 返回事件，基于左侧挂载的封装                       | Function             | -      |
| onCloseClick          | 关闭事件，基于左侧挂载的封装                       | Function             | -      |
| addonAfter            | 右侧挂载                                           | Component            | -      |
| addonBottom           | 下方挂载                                           | Component            | -      |
| homepageButton        | 是否显示回首页的按钮                               | Boolean              | false  |
| onHomepageButtonClick | 回首页按钮点击的事件，默认回到当前域名下的/m/index | Function             | -      |
| hideInApp             | 在 app 中隐藏自身                                  | Boolean              | false  |
| hideInAlipay          | 在 支付宝(网页和小程序) 中隐藏自身                 | Boolean              | false  |
| hideInAlipayMP        | 在 支付宝小程序 中隐藏自身                         | Boolean              | false  |
| borderType            | 头部下方是使用阴影、线或是没有                     | border、shadow、none | none   |

## Layout.Body 支持属性

| 属性                   | 说明                                                      | 类型     | 默认值   |
| ---------------------- | --------------------------------------------------------- | -------- | -------- |
| loading                | 若为 true 显示 loading 效果并隐藏内容                     | Boolean  | false    |
| errorInfo              | 出错文案，不为空时显示文案并隐藏内容，权重不及 loading 高 | String   | -        |
| onReachBottom          | 到达底部时的钩子                                          | Object   | -        |
| onReachButton.disabled | 是否禁用该功能，没有 onReachBottom 对象时也表示禁用       | Boolean  | false    |
| onReachButton.content  | 提示内容                                                  | String   | 加载更多 |
| onReachButton.handle   | 点击提示文字或页面到达底部触发的方法                      | Function | -        |
| onScroll               | 滚动回调函数                                              | Function | -        |

## Layout.Footer 支持属性

| 属性    | 说明     | 类型    | 默认值 |
| ------- | -------- | ------- | ------ |
| visible | 是否显示 | Boolean | true   |
