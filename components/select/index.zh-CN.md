# Spin 加载

一般放在下拉加载更多这种形式的列表底部

## 基本使用

code=[基本使用](select)

## 支持属性

| 属性         | 说明                  | 类型                                   | 默认值 |
| ------------ | --------------------- | -------------------------------------- | ------ |
| className    |                       | String                                 | -      |
| height       | 下拉框的高度          | number                                 | -      |
| left         | 下拉框距离左侧的距离  | number                                 | -      |
| right        | 下拉框距离右侧的距离  | number                                 | -      |
| referenceRef | 触发下拉框显示的元素  | HTMLElement                            | -      |
| data         | 下拉框数据            | label: string, value: string or number |        | - |
| value        | 与 data 中 value 一致 | String or number                       | -      |
| onChange     | 返回某一项的 data     | (data: data) => void                   | -      |
