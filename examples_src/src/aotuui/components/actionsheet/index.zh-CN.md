# Action-Sheet 动作面板

有`onClose`方法时，点击背景蒙层会关闭整个动作面板(触发 onClose)，所以默认是没有关闭按钮的，需要关闭按钮可以通过`closeText`属性设置关闭按钮的文字，然后点击关闭按钮也会调用`onClose`方法

## 基本使用

code=[基本使用](actionsheet)

## 带关闭按钮

code=[close button](actionsheet_close_button)

## 自定义显示内容

code=[custom items](actionsheet_custom_items)

## 支持属性

| 属性      | 说明                                             | 类型     | 默认值 |
| --------- | ------------------------------------------------ | -------- | ------ |
| visible   | 是否显示                                         | Boolean  | false  |
| title     | 标题文字                                         | String   | -      |
| items     | 选项,见下                                        | Array    | -      |
| closeText | 关闭按钮的文字                                   | String   | 关闭   |
| onClose   | 关闭按钮点击事件                                 | Function | -      |
| onClick   | 点击选项出发，参数为当前点击的 item 对象的 value | Function | -      |

## items 支持属性

| 属性  | 说明                 | 类型                  | 默认值 |
| ----- | -------------------- | --------------------- | ------ |
| name  | 显示文字             | String/ReactElement   | -      |
| value | onClick 时携带的参数 | String/Number/Boolean | -      |
