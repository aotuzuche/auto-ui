---
---

## Alert 提示框

**基本使用**
```js
Alert.show('吃了吗？')
```

**主动关闭**

你也可以使用Alert.hide()来关闭它，一般不会用到
```js
Alert.hide()
```

**标题+内容**
```js
Alert.show({
    title: '侬好',
    desc: '吃了吗？'
})
```

**confirm模式**
```js
Alert.show({
    title: '侬好',
    desc: '吃了吗？',
    btnTextN: '还没',
    btnTextY: '吃了',
    callbackY: () => {
        // yes
    },
    callbackN: () => {
        // no
    }
})
```

|属性|说明|类型|默认值|
|-|-|-|-|
|title|标题|String|-|
|desc|内容正文|String|empty|
|className|样式名|String|-|
|btnTextN|否定按钮文字|String|-|
|btnTextY|肯定按钮文字|String|确定|
|btnText|btnTextY的别名|String|确定|
|callbackN|否定回调方法|Function|-|
|callbackY|肯定回调方法|Function|-|
|callback|callbackY的别名|Function|-|
