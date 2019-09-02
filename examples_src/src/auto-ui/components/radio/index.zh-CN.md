# Radio 勾选框

## 基本使用

code=[基本使用](radio)

## Border 形式

当 radio 没有选中时，是以 border 的形式表示

code=[border](radio_border)

## 带文字

code=[text](radio_text)

## 禁用

code=[disabled](radio_disabled)

## 支持属性

| 属性     | 说明                                        | 类型       | 默认值 |
| -------- | ------------------------------------------- | ---------- | ------ |
| checked  | 选中状态                                    | Boolean    | false  |
| border   | 当 radio 没有选中时，是以 border 的形式表示 | Boolean    | false  |
| value    | 值，在 onChange 事件中将会作为参数携带      | String/Int | -      |
| text     | 提示文字，跟在该 icon 后面                  | String     | -      |
| onChange | 点击事件                                    | Function   | -      |
| disabled | 是否禁用                                    | Boolean    | false  |
