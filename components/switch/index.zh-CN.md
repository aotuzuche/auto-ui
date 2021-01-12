# Switch 开关

## 基本使用

code=[基本使用](switch)

## 带文字

注意：只有`i`和`o`同时有的情况下才会显示带文字

code=[i、o](switch_io)

## 带图标

code=[icon](switch_icon)

## 不同类型(颜色)

code=[type](switch_type)

## mini

`mini`模式下，尺寸会小一号，并带文字功能和带图标功能均不可用

code=[mini](switch_mini)

## 禁用

code=[disabled](switch_disabled)

## 支持属性

| 属性     | 说明                                                       | 类型     | 默认值  |
| -------- | ---------------------------------------------------------- | -------- | ------- |
| active   | 是否激活状态                                               | Boolean  | false   |
| onChange | 点击事件                                                   | Function | -       |
| i        | 非激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效 | String - |
| o        | 激活时的文字（建议不超过 4 字节），i 与 o 同时使用才有效   | String - |
| type     | primary / secondary / danger                               | String   | primary |
| icon     | 带 icon，会在圆的滑块上显示勾/叉图标                       | Boolean  | false   |
| mini     | 小号的 switch，mini 模式下，io 和 icon 均不可用            | Boolean  | false   |
| disabled | 是否为不可用                                               | Boolean  | false   |
