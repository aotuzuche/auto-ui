---
---

## Action-Sheet 动作框

### ActionSheet

**基本用法**

```jsx
<ActionSheet
    visible={this.state.visible}
    title="Please choose one of them."
    onClose={ ... }
    onClick={ ... }
>
    <ActionSheet.Item text="Action A" value={1} />
    <ActionSheet.Item text="Action B" value={2} />
    <ActionSheet.Item text="Action C" value={3} />
</ActionSheet>
```

**带标题**
```jsx
<ActionSheet
    visible={this.state.visible}
    title="Please choose one of them."
>
    <ActionSheet.Item text="Action A" value={1} />
    <ActionSheet.Item text="Action B" value={2} />
    <ActionSheet.Item text="Action C" value={3} />
</ActionSheet>
```

**蒙层点击**
```jsx
<ActionSheet
    visible={this.state.visible}
    onBgClick={ ... }
>
    <ActionSheet.Item text="Action A" value={1} />
    <ActionSheet.Item text="Action B" value={2} />
    <ActionSheet.Item text="Action C" value={3} />
</ActionSheet>
```

**自定义关闭文字**
```jsx
<ActionSheet
    visible={this.state.visible}
    closeText="关闭"
>
    <ActionSheet.Item text="Action A" value={1} />
    <ActionSheet.Item text="Action B" value={2} />
    <ActionSheet.Item text="Action C" value={3} />
</ActionSheet>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|visible|是否显示|Boolean|false|
|onBgClick|蒙层点击事件|Function|-|
|title|标题文字|String|-|
|closeText|关闭按钮的文字|String|关闭|
|onClose|关闭按钮点击事件|Function|-|
|onClick|代理ActionSheet.Item组件的onClick事件，将Item组件的value作为参数|Function|-|

### ActionSheet.Item

ActionSheet的每一项，在ActionSheet组件中添加onClick方法，当Item组件被点击时将会把该组件的value属性作为参数执行onClick事件

```jsx
<ActionSheet.Item text="Action A" value={1} />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|text|提示文字|String|-|
|value|该item对应的值|String/Int|-|
