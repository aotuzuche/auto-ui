# Button 按钮

## 基本使用

code=[基本使用](button)

## 按钮类型

按钮分为`primary`、`lighter`、`danger`、与`default`四种（注意：默认为`primary`）。另外，按钮加上`hollow`属性即可变为空心按钮

code=[type](button_type)

## 收缩

注意：mini 类型的按钮该值默认为 true

code=[type](button_shrink)

## 小按钮

code=[mini](button_mini)

## 加载中

code=[loading](button_loading)

## 禁用

code=[disabled](button_disabled)

## 支持属性

| 属性     | 说明                                                     | 类型     | 默认值                                   |
| -------- | -------------------------------------------------------- | -------- | ---------------------------------------- |
| type     | 按钮的种类，primary / secondary / danger / default       | String   | primary                                  |
| shadow   | 按钮投影，只有类型为 primary / secondary / danger 时才有 | Boolean  | false                                    |
| lighter  | 轻按钮，只有类型为 primary / secondary / danger 时才有   | Boolean  | false                                    |
| hollow   | 空心按钮，只有类型为 primary / secondary / danger 时才有 | Boolean  | false                                    |
| onClick  | 点击事件(按钮类型为 button)                              | Function | -                                        |
| to       | 跳转路由(按钮类型为 Link)                                | String   | -                                        |
| href     | 跳转 url(按钮类型为 a 标签)                              | String   | -                                        |
| mini     | 是否使用小按钮                                           | Boolean  | false                                    |
| capsule  | 是否使用胶囊按钮，即两头圆角的样式                       | Boolean  | true                                     |
| loading  | 是否为加载中状态                                         | Boolean  | false                                    |
| disabled | 是否不可用                                               | Boolean  | false                                    |
| shrink   | 是否收缩到文字显示范围                                   | Boolean  | mini 为 true 时该值为 true，否则为 false |
