# Spin 加载

一般放在下拉加载更多这种形式的列表底部

## 基本使用

code=[基本使用](select)

## 支持属性

| 属性          | 说明                                   | 类型                                   | 默认值 |
| ------------- | -------------------------------------- | -------------------------------------- | ------ |
| className     |                                        | String                                 | -      |
| height        | 下拉框的高度                           | number                                 | -      |
| data          | 下拉框数据                             | label: string, value: string or number |        | - |
| current       | label: string, value: string or number | label: string, value: string or number | -      |
| onChange      | 返回某一项的 data                      | (data: data) => void                   | -      |
| disabledInput | 禁止输入                               | boolean                                | false  |
| allowClear    | 清空选项                               | boolean                                | true   |
