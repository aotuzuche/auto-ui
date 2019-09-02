# Popup 弹出层

## 基本使用

`Popup`的默认高度是 50%

code=[基本使用](popup)

## 自定义高度

如果为 Number 类型，使用%的单位，也可以使用 String 类型表示，比如 50px

code=[height](popup_height)

## 位于顶部

code=[top](popup_top)

## 蒙层点击

code=[mask click](popup_mask_click)

## 不需要内 padding

默认情况下，`Popup`的内 padding 与`Layout.Body`是一致的，但有些时候我们不需要内 padding，可以简单的使用`noPadding`

code=[no padding](popup_no_padding)

## 从父容器的位置弹出

code=[from parent](popup_from_parent)

## 滚动

Popup 组件内其实本身是可以滚动的，但如果我要实现如下部分滚动的方式，就需要用到该组件

code=[scroll](popup_scroll)

## 支持属性

| 属性         | 说明                        | 类型          | 默认值 |
| ------------ | --------------------------- | ------------- | ------ |
| visible      | 是否显示                    | Boolean       | false  |
| onBgClick    | 蒙层点击事件                | Function      | -      |
| height       | 高度                        | Number/String | 50     |
| smoothBorder | 平滑边角，即圆角            | Boolean       | false  |
| top          | 是否从顶部滑入              | Boolean       | false  |
| noPadding    | 是否需要内 padding          | Boolean       | false  |
| local        | 从当前 Popup 的父容器中弹出 | Boolean       | false  |
