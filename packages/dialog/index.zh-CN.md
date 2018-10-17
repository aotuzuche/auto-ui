---
---

# Dialog 高级弹出框

```jsx
import { Dialog } from 'auto-ui'
```

它是对 Alert 的补充，能实现 Alert 的效果且作用更广，因为它的内部可以放置任意内容的组件

## 使用示例

### 基础用法

```jsx
<Dialog visible={this.state.default}>基础用法</Dialog>
```

### 蒙层点击

```jsx
<Dialog
  onBgClick={() => {
    this.setState({
      isBgClick: false
    })
  }}
  visible={this.state.isBgClick}
>
  蒙层点击
</Dialog>
```

### 自定义高度

注意：height 的单位为%，即 100 为全屏显示

```jsx
<Dialog visible={this.state.isCustomHeight} height="80">
  自定义高度
</Dialog>
```

### 滚动

Dialog 组件内其实本身是可以滚动的，但如果我要实现如下滚动方式，就需要用到该组件

```jsx
<Dialog visible={this.state.isScroll} height="40">
  <h1>我是头，不需要滚动</h1>

  <Dialog.Scroller>
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
    我是内容，高度不确定，如果太多了就在内部滚动
  </Dialog.Scroller>

  <Button>我是在最底下的按钮，同样不需要滚动</Button>
</Dialog>
```

## 支持属性

| 属性      | 说明                                 | 类型     | 默认值 |
| --------- | ------------------------------------ | -------- | ------ |
| visible   | 是否显示                             | Boolean  | false  |
| onBgClick | 蒙层点击事件                         | Function | -      |
| height    | 1-100, 使用 Dialog.Scroller 必须设置 | Int      | auto   |
