# Alert 提示框

## 基本使用

code=[基本使用](alert)

## 主动关闭

`Alert` 会返回一个 `close` 方法

code=[close](alert_close)

## 关闭通知

code=[callback](alert_callback)

## 标题+内容

code=[title、desc](alert_title_desc)

## confirm 模式

`btns`内的按钮**JSON 形式**的为`Button`组件，所以支持`Button`组件的所有`props`。不过需要注意的是：按钮的点击事件可以使用`Button`的`onClick`事件，也可以使用`Alert`的第二个参数，若同时有，都会回调。

code=[confirm](alert_confirm)

## async 模式

code=[async](alert_async)

## 支持属性

| 属性         | 说明                                            | 类型                | 默认值   |
| ------------ | ----------------------------------------------- | ------------------- | -------- |
| title        | 标题                                            | String/ReactElement | -        |
| desc         | 内容正文                                        | String/ReactElement | empty    |
| className    | 样式名                                          | String              | -        |
| btns         | 按钮集合                                        | Array<Button 组件>  | 确定按钮 |
| btnDirection | 按钮的排列方向, row: 横向排列 column: 纵向排列  | row / column        | row      |
| callback     | 按钮点击的回调用，该方法返回 btns 的 value 属性 | Function            | -        |

## 方法

| 属性  | 说明                   | 类型             | 默认值 |
| ----- | ---------------------- | ---------------- | ------ |
| async | 使用 async func 的方式 | Promise Function | -      |

## 调用返回

| 属性  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| close | 关闭方法 | Function | -      |

## btns 支持属性

| 属性    | 说明                                  | 类型                    | 默认值 |
| ------- | ------------------------------------- | ----------------------- | ------ |
| name    | 按钮文字                              | String/HTMLElement      | -      |
| value   | 按钮的值(在 async 或 callback 时返回) | String、Number、Boolean | -      |
| onClick | 按钮点击回调                          | Function                | -      |
| ...     | 其他 Button 组件的 props              | ...                     | -      |
