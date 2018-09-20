---
---

## Dialog 对话框

它是对Alert的补充，能实现Alert的效果且作用更广，因为它的内部可以放置任意内容的组件

**基本用法**

```jsx
<Dialog
    visible={this.state.visible}
>
    Some text.
</Dialog>
```

**蒙层点击**

```jsx
<Dialog
    onBgClick={ ... }
    visible={this.state.visible}
>
    Some text.
</Dialog>
```

**自定义高度**

注意：height的单位为%，即100为全屏显示
```jsx
<Dialog
    height={80}
    visible={this.state.visible}
>
    Some text.
</Dialog>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|visible|是否显示|Boolean|false|
|onBgClick|蒙层点击事件|Function|-|
|height|自定义高度，单位为%，即100就是全屏显示|Int|auto|

### Dialog.Scroller

Dialog组件内其实本身是可以滚动的，但如果我要实现如下滚动方式，就需要用到该组件

```

<Dialog>

    <h1>我是头，不需要滚动</h1>

    <p>我是内容，高度不确定，如果太多了就在内部滚动...</p>

    <Button>我是在最底下的按钮，同样不需要滚动</Button>

</Dialog>


```

实现方式：

**注意，这时Dialog的height属性必须设置，不能让其自适应**
```jsx
<Dialog
    visible={this.state.visible}
    height={50}
>
    I am a dialog.

    <Dialog.Scroller>
        inner
    </Dialog.Scroller>

    after scroller.
</Dialog>
```
