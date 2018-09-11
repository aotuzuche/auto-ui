# auto-ui 移动端ui库

`最新版本：2.1.16`


1. 在脚手架项目中已配置auto-import-loader，以下组件直接使用即可，不需要导入，该loader会自动按需完成该工作，**但不包含（Loading、Toast、Alert这3个方法组件）**。

2. 所有组件均可正常添加dom相关的props，以及className，后续代码不再体现相关的支持情况。

3. 在线demo地址: http://10.0.3.200/auto-ui-demo/layout

----

## 1. Layout 布局

包括3个部分，Header、Body和Footer，用于页面结构最外层

<iframe src="http://10.0.3.200/auto-ui-demo/layout" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>


**示例代码**
```jsx
<Layout>
    <Layout.Header>
        header
    </Layout.Header>

    <Layout.Body>
        body
    </Layout.Body>

    <Layout.Footer>
        footer
    </Layout.Footer>
</Layout>
```

### Layout
用于包裹Layout的Header、Body与Footer，无特殊props。


### Layout.Header

```jsx
<Layout.Header
    addonBefore={<a href="#">before</a>}
    title="Title"
    addonAfter={<a href="#">after</a>}
    addonBottom={<p>some text...</p>}
/>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|innerClassName|内层样式名，因为有2层嵌套|String|-|
|title|标题|String|-|
|ghost|透明模式，一般用在个人主页之类的顶部|Boolean|false|
|addonBefore|左侧挂载|Component|-|
|onBackClick|返回事件，基于左侧挂载的封装|Function|-|
|onCloseClick|关闭事件，基于左侧挂载的封装|Function|-|
|addonAfter|右侧挂载|Component|-|
|addonBottom|下方挂载|Component|-|



### Layout.Body

```jsx
<Layout.Body
    loading={false}
    errorInfo="Some erros"
>
    content
</Layout.Body>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|loading|是否正在加载中，若为true显示loading效果并隐藏内容|Boolean|false|
|errorInfo|出错时的文案，不为空时显示文案并隐藏内容，权重不及loading高|String|-|



### Layout.Footer

|属性|说明|类型|默认值|
|-|-|-|-|
|visible|是否显示|Boolean|true|



## 2. Cell 列
包括2个部分，Cell和Cell.Row，Cell为列的外容易，内部包含Cell.Row，Cell.Row为每项的内容

<iframe src="http://10.0.3.200/auto-ui-demo/cell" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**示例代码**
```jsx
<Cell>
    <Cell.Row>
        1. balabala
    </Cell.Row>
    
    <Cell.Row>
        2. balabala
    </Cell.Row>

    <Cell.Row>
        3. balabala
    </Cell.Row>
</Cell>
```

### Cell

**统一点击事件**

将事件写在Cell上，并且Cell.Row都带有value属性，就可以在每行的点击时捕获他们，事件中将会把value作为参数带回。

```jsx
<Cell onClick={ val => { console.log(val) } }>
    <Cell.Row value={1}>A</Cell.Row>
    <Cell.Row value={2}>A</Cell.Row>
</Cell>
```

**分隔线缩进**

使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式
```jsx
<Cell indentLine>
    <Cell.Row>A</Cell.Row>
</Cell>
```

**带箭头**

使每行的右侧带箭头符号
```jsx
<Cell arrow>
    <Cell.Row>A</Cell.Row>
</Cell>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|onClick|点击事件，代理内部每个Row组件的onClick事件，权重比它高|Function|-|
|indentLine|使每行的分隔线左侧不顶到头，很多列表菜单使用这种样式|Boolean|false|
|arrow|使每行的右侧带箭头符号|Boolean|false|


### Cell.Row

**带label**

位置在children前
```jsx
<Cell.Row label="A" />
```

**onClick事件**

效果同Cell的onClick事件，当Cell同样有onClick事件时，该事件无效
```jsx
<Cell.Row value={1} onClick={ ... } />
```

**带箭头**

右侧带箭头符号
```jsx
<Cell.Row arrow>A</Cell.Row>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|label|label标签，位置在children前|Boolean|false|
|onClick|点击事件，代理内部每个Row组件的onClick事件，权重比它高|Function|-|
|value|onClick事件所携带的参数|Any|-|
|arrow|右侧带箭头符号|Boolean|false|


## 3.Button 按钮

<iframe src="http://10.0.3.200/auto-ui-demo/button" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**按钮种类**

按钮分为primary、danger与default3种（注意：默认为primary）
```jsx
<Button type="primary" onClick={ ... }>Primary Button</Button>

<Button type="danger" onClick={ ... }>Danger Button</Button>

<Button type="default" onClick={ ... }>Default Button</Button>
```

**小按钮**
```jsx
<Button onClick={ ... } mini>Mini type</Button>
```

**加载中**
```jsx
<Button onClick={ ... } loading>With loading</Button>
```

**不可用**
```jsx
<Button onClick={ ... } disabled>Disabled</Button>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|type|按钮的种类，primary / danger / default|String|primary|
|onClick|点击事件|Function|-|
|mini|是否使用小按钮|Boolean|false|
|loading|是否为加载中状态|Boolean|false|
|disabled|是否不可用|Boolean|false|


## 4.Input 输入框

<iframe src="http://10.0.3.200/auto-ui-demo/input" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本使用**
```jsx
<Input type="text" placeholder="Placeholder" />
```

**不可用**
```jsx
<Input type="text" placeholder="Placeholder" disabled />
```

**错误**
```jsx
<Input type="text" placeholder="Placeholder" error />
```

**左侧挂载**
```jsx
<Input type="text" placeholder="Placeholder" addonBefore={<a href="#">Before</a>} />
```

**右侧挂载**
```jsx
<Input type="text" placeholder="Placeholder" addonAfter={<a href="#">After</a>} />
```

**多行**
```jsx
<Input type="text" placeholder="Placeholder" multi />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|disabled|是否为不可用|Boolean|false|
|error|是否为错误样式（红色边框）|Boolean|false|
|addonBefore|左侧挂载，比如一些icon或标题|Component|-|
|addonAfter|右侧挂载，比如发送验证码按钮|Component|-|
|multi|多行显示，默认3行，注意：使用多行时，挂载将失效|Boolean|false|


## 5.Tabs 标签页

本组件仅提空tabs本身，即没有标签内容部分，这部分请自行根据tabs的active属性判断显示

<iframe src="http://10.0.3.200/auto-ui-demo/tabs" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**示例代码**

Tabs的active值与Tabs.Item的value值相等时，该tab即为当前

```jsx
<Tabs active={this.state.active} onClick={this.evt.tabClick}>
    <Tabs.Item value={1}>Tab a</Tabs.Item>
    <Tabs.Item value={2}>Tab b</Tabs.Item>
    <Tabs.Item value={3}>Tab c</Tabs.Item>
</Tabs>
```
### Tabs

|属性|说明|类型|默认值|
|-|-|-|-|
|active|当前的活动tab编号|String/Int|-|
|onClick|代理Tabs.Item的点击事件，并将Tabs.Item的value属性作为参数返回|Function|-|

### Tabs.Item

|属性|说明|类型|默认值|
|-|-|-|-|
|value|该Item对应的值|String/Int|-|

## 6.Alert 提示框

<iframe src="http://10.0.3.200/auto-ui-demo/alert" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

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


## 7.Toast 轻提示

<iframe src="http://10.0.3.200/auto-ui-demo/toast" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本使用**
```js
Toast.show('吃了吗？')
```

**自定义显示时长，默认2秒**
```js
Toast.show('吃了吗？', 5000)
```

**主动关闭**
```js
Toast.hide()
```

## 8.Loading 全局加载（覆盖式）

<iframe src="http://10.0.3.200/auto-ui-demo/loading" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本使用**
```js
Loading.show()
```

**带提示**
```js
Loading.show('加载中...')
```

**超时自动关闭**
```js
// 2秒后自动关闭
Loading.show('加载中...', 2000)
```

**关闭**
```js
Loading.hide()
```

## 8.Spin 加载提示组件

<iframe src="http://10.0.3.200/auto-ui-demo/spin" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

一般用于下拉加载更多这种形式的列表底部
```jsx
<Spin text="Loading..." />
```
|属性|说明|类型|默认值|
|-|-|-|-|
|text|提示文字|String|-|

## 9.Radio 选择

<iframe src="http://10.0.3.200/auto-ui-demo/radio" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本使用**
```jsx
<Radio
    checked={this.state.checked}
    value={1}
    text="Radio A"
    onChange={ ... }
/>
```

**不可用**
```jsx
<Radio disabled />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|checked|是否选中状态|Boolean|false|
|value|值，在onChange事件中将会作为参数携带|String/Int|-|
|text|提示文字，跟在该icon后面|String|-|
|onChange|点击事件|Function|-|
|disabled|是否为不可用|Boolean|false|

## 10.Switch 开关

<iframe src="http://10.0.3.200/auto-ui-demo/switch" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本使用**
```jsx
<Radio
    active={this.state.active}
    onChange={ ... }
/>
```

**带文字**

注意：只有i和o同时有的情况下才会显示带文字
```jsx
<Radio
    i="关"
    o="开"
    active={this.state.active}
    onChange={ ... }
/>
```

**带勾/叉图标**
```jsx
<Radio
    icon
    active={this.state.active}
    onChange={ ... }
/>
```

**不可用**
```jsx
<Radio disabled />
```

|属性|说明|类型|默认值|
|-|-|-|-|
|active|是否激活状态|Boolean|false|
|onChange|点击事件|Function|-|
|i|非激活时的文字（建议不超过4字节），i与o同时使用才有效|String|-|
|o|激活时的文字（建议不超过4字节），i与o同时使用才有效|String|-|
|icon|带icon，会在圆的滑块上显示勾/叉图标|Boolean|false|
|disabled|是否为不可用|Boolean|false|


## 11.Popup 弹出框

显示方式为从下方滑入或是从上方滑入，并使用createPortal挂载在根目录下，所以在使用时写在离主要业务逻辑最近的代码片段中即可

<iframe src="http://10.0.3.200/auto-ui-demo/popup" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

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

## 12.Dialog 对话框

它是对Alert的补充，能实现Alert的效果且作用更广，因为它的内部可以放置任意内容的组件

<iframe src="http://10.0.3.200/auto-ui-demo/dialog" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

### Dialog

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


## 13.ActionSheet 动作框

<iframe src="http://10.0.3.200/auto-ui-demo/actionSheet" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

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

## 14.TimePicker 时间选择

时间选择器，一般在实际应用场景里会结合Popup组件，组合成弹框式的时间选择


<iframe src="http://10.0.3.200/auto-ui-demo/timePicker" width="375px" height="600px" frameborder="0" scrolling="no"></iframe>

**基本用法**

```jsx

const data = [{
    day: new Date(2018, 4, 1),
    times: ['0000', '1015']
}, {
    day: new Date(2018, 4, 2),
    times: ['0500', '1100']
}, {
    day: new Date(2018, 4, 3),
    times: [['0000', '0015'], ['0145', '1200']]
}]

<TimePicker
    data={data}
    format={['MM月dd日 周wk', 'h点', 'm分']}
    interval={1}
    defaultDay={new Date(2018, 4, 3, 2, 0)}
    ref={e => {
      this.tp = e
    }}
    onChange={this.evt.showTime}
/>
```

|属性|说明|类型|默认值|
|-|-|-|-|
|data|时间数据|[Object]Array|-|
|data.day|天，注意这里的Date类型必须要给该天00:00:00的数据，即时分秒都为0|Date|-|
|data.times|时间可选的范围，1. 如果没有该值，范围为全天24小时可选；2. 一维数组数据，单个范围可选；3. 二维数组数据，多个范围可选；|Array|天全24小时|
|format|数据展示形式，长度为3的数组，分别对应天，小时，分钟|Array|['MM月dd日 周wk', 'h点', 'm分']|
|interval|可选分钟的时间间隔，必须能被60整除|Int|15|
|defaultDay|默认时间，注意分钟的数据要和interval对应，也就是说如果interval设置为15，那分钟的数据必须是0、15、30、45|Date|-|
|onChange|滑动时间器的回调方法，会带上当前的时间（Date类型）作为参数|Function|-|

**可用方法**

通过ref拿到该组件的实例之后，可以调用如下几个方法

|方法名|说明|
|-|-|
|reset|恢复默认时间，即把时间滚动到defaultDay这个属性相对应的时间|
|getTime|获取当前的时间|
|setTime|设置当前的时间，参数为Date类型，且要在可选范围内|
|refresh|刷新滚动条，因为滚动部分用的是iscroll，在切换显示隐藏时可能会造成滚动条不可用，调用该方法解决|


## 15.点击事件埋点数据统计

### A组件

大写的A组件，其实他就是html的a标签，包装了发送数据统计相关的代码

当他有report时，会自动发送统计数据，如果没有则跟a标签没有区别，另外发送数据的地址在`auto/__libs/report.js`中配置

```jsx
<A report={{ foo: 'bar' }}>click me!</A>
```

另外目前组件中直接支持埋点数据统计的有

- Button
- Cell.Row
- Radio
- Switch
- Tabs.Item
- ActionSheet.Item

他们均继承自A组件，他除了a标签本身的props之外，还可以接受两个与埋点相关的props

|属性|说明|类型|默认值|
|-|-|-|-|
|report|数据统计所需要发送的数据|Object|-|
|defer|是否在onClick事件完成后发送|Boolean|false|

### 手动发送统计请求

如果不使用组件而需要手动发送的话，可以在页面中导入`auto/__libs/report.js`这个js文件

```js
report({
  foo: 'bar'
})
```

