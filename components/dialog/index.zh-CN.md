# Dialog 对话框

它是对`Alert`的补充，能实现`Alert`的效果且作用更广，因为它的内部可以放置任意内容的组件，但他需要自己定义内容样式。

## 基本使用

code=[基本使用](dialog)

## 蒙层点击

code=[mask click](dialog_mask_click)

## 自定义高度

如果为 Number 类型，使用%的单位，也可以使用 String 类型表示，比如 50px

code=[height](dialog_height)

## 上面添加额外内容

code=[addon](dialog_addon)

## 滚动

code=[scroll](dialog_scroll)

## 支持属性

| 属性         | 说明                                                                                      | 类型          | 默认值 |
| ------------ | ----------------------------------------------------------------------------------------- | ------------- | ------ |
| visible      | 是否显示                                                                                  | Boolean       | false  |
| keepalive    | 默认情况下，内容会在首次打开后渲染，之后始终保留，设置为 false 后，每次关闭后都会删除内容 | Boolean       | true   |
| onMaskClick  | 蒙层点击事件                                                                              | Function      | -      |
| title        | 标题                                                                                      | String        | -      |
| onCloseClick | 关闭按钮点击事件(默认不显示关闭按钮)                                                      | Function      | -      |
| height       | 高度, 使用 Dialog.Scroller 必须设置                                                       | Number/String | auto   |
