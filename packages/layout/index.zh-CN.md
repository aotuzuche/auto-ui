---
---

## Layout 布局

包括3个部分，Header、Body和Footer，用于页面结构最外层



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
