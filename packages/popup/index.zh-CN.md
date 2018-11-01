---
---

# Popup 弹出层

## 使用示例

```jsx
import { NavBar } from 'auto-ui'
```

### 基本使用

```jsx
<Popup visible={this.state.default}>基本使用</Popup>
```

### 自定义高度

```jsx
<Popup height="80" visible={this.state.customHeight}>
  自定义高度
</Popup>
```

### 顶部

```jsx
<Popup top visible={this.state.top}>
  顶部
</Popup>
```

### 蒙层点击

```jsx
<Popup
  onBgClick={() => {
    this.setState({
      bg: false
    })
  }}
  visible={this.state.bg}
>
  蒙层点击
</Popup>
```

### 不需要内 padding

```jsx
<Popup noPadding visible={this.state.padding}>
  不需要内 padding
</Popup>
```

### 从父容器的位置弹出

```jsx
<div className={父容器}>
  <Popup local visible={this.state.isLocal}>
    不需要内 padding
  </Popup>
</div>
```

### 滚动

Popup 组件内其实本身是可以滚动的，但如果我要实现如下滚动方式，就需要用到该组件

```jsx
<Popup visible={this.state.isScroll} height="40">
  <h1>我是头，不需要滚动</h1>

  <Popup.Scroller>
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
  </Popup.Scroller>

  <Button>我是在最底下的按钮，同样不需要滚动</Button>
</Popup>
```

## 支持属性

| 属性      | 说明                                                               | 类型     | 默认值 |
| --------- | ------------------------------------------------------------------ | -------- | ------ |
| visible   | 是否显示                                                           | Boolean  | false  |
| onBgClick | 蒙层点击事件                                                       | Function | -      |
| height    | 1-100                                                              | Int      | 50     |
| top       | 是否从顶部滑入                                                     | Boolean  | false  |
| noPadding | 内 padding，为 true 时则没有，比如在内部再嵌套 Layout 时就需要用到 | Boolean  | false  |
| local       | 从当前Popup的父容器中弹出                                                     | Boolean  | false  |
