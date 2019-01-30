# Button 按钮

## 基本使用

code=[基本使用](button)

## 按钮类型

按钮分为`primary`、`danger`、与`default`三种（注意：默认为`primary`）。另外，按钮加上`hollow`属性即可变为空心按钮，所以实际上来讲，一共有 6 种不同的按钮

code=[type](button_type)

## 小按钮

code=[mini](button_mini)

## 加载中

code=[loading](button_loading)

## 禁用

code=[disabled](button_disabled)

## 支持属性

| 属性     | 说明                                   | 类型     | 默认值  |
| -------- | -------------------------------------- | -------- | ------- |
| type     | 按钮的种类，primary / danger / default | String   | primary |
| onClick  | 点击事件                               | Function | -       |
| mini     | 是否使用小按钮                         | Boolean  | false   |
| loading  | 是否为加载中状态                       | Boolean  | false   |
| disabled | 是否不可用                             | Boolean  | false   |
