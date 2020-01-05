# Input 文本输入

## 基本使用

code=[基本使用](input)

## 禁用

code=[disabled](input_disabled)

## 错误

code=[error](input_error)

## 左右侧挂载

code=[addonBefore、addonAfter](input_addon)

## 多行文本

code=[multi](input_multi_line)

## 显示删除按钮

code=[multi](input_clear)

## 支持属性

| 属性        | 说明                           | 类型      | 默认值 |
| ----------- | ------------------------------ | --------- | ------ |
| disabled    | 是否禁用                       | Boolean   | false  |
| error       | 是否显示错误样式（红色边框）   | Boolean   | false  |
| addonBefore | 左侧挂载，比如一些 icon 或标题 | Component | -      |
| addonAfter  | 右侧挂载，比如发送验证码按钮   | Component | -      |
| multi       | 多行文本                       | Boolean   | false  |
| type        | 文本类型                       | String    | text   |
| allowClear  | 是否显示删除按钮               | Boolean   | false  |
