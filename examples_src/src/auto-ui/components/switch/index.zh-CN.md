# Switch 开关

## 基本使用

code=[基本使用](switch)

## 带文字

注意：只有`i`和`o`同时有的情况下才会显示带文字

code=[i、o](switch_io)

## 带图标

code=[icon](switch_icon)

## 禁用

code=[disabled](switch_disabled)

## 支持属性

| 属性     | 说明                                                       | 类型     | 默认值 |
| -------- | ---------------------------------------------------------- | -------- | ------ |
| active   | 是否激活状态                                               | Boolean  | false  |
| onChange | 点击事件                                                   | Function | -      |
| i        | 非激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效 | String - |
| o        | 激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效   | String - |
| icon     | 带 icon，会在圆的滑块上显示勾/叉图标                       | Boolean  | false  |
| disabled | 是否为不可用                                               | Boolean  | false  |
