---
---

## Popup 弹出框


显示方式为从下方滑入或是从上方滑入，并使用createPortal挂载在根目录下，所以在使用时写在离主要业务逻辑最近的代码片段中即可

### Popup

**基本使用**
```jsx
<Popup
    visible={this.state.visible}
>
    I am a popup.
</Popup>
```

**自定义高度**

注意：height的单位为%，即100为全屏显示
```jsx
<Popup
    height={80}
    visible={this.state.visible}
>
    I am a popup.
</Popup>
```

**在顶部**

显示的时候会从顶部向下滑入
```jsx
<Popup
    top
    visible={this.state.visible}
>
    I am a popup.
</Popup>
```

**蒙层点击**

```jsx
<Popup
    onBgClick={ ... }
    visible={this.state.visible}
>
    I am a popup.
</Popup>
```

**不需要内padding**

或者可以通过添加样式的方式来实现
```jsx
<Popup
    noPadding
    visible={this.state.visible}
>
    I am a popup.
</Popup>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|visible|是否显示|Boolean|false|
|onBgClick|蒙层点击事件|Function|-|
|height|自定义高度，单位为%，即100就是全屏显示|Int|50|
|top|是否从顶部滑入|Boolean|false|
|noPadding|内padding，为true时则没有，比如在内部再嵌套Layout时就需要用到|Boolean|false|

### Popup.Scroller

Popup组件内其实本身是可以滚动的，但如果我要实现如下滚动方式，就需要用到该组件

```

<Popup>

    <h1>我是头，不需要滚动</h1>

    <p>我是内容，高度不确定，如果太多了就在内部滚动...</p>

    <Button>我是在最底下的按钮，同样不需要滚动</Button>

</Popup>


```

实现方式：

```jsx
<Popup
    visible={this.state.visible}
>
    I am a popup.

    <Popup.Scroller>
        inner
    </Popup.Scroller>

    after scroller.
</Popup>
```
