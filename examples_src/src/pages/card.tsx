import * as React from 'react'
import { Card, Cell, Layout, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { disabled: false }

  onClick = () => {
    Toast('on click')
  }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Cell.Title text="不固定宽高比的card，高度随着内容的多少而变化，图片1:1显示" />
          <Card shadow style={{ width: '50%' }}>
            <Card.Figure
              aspectRatio={1}
              onClick={this.onClick}
              image="https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg"
            >
              <p style={{ color: 'white', padding: '10px' }}>车辆名称</p>
            </Card.Figure>
            <p style={{ padding: '10px' }}>
              车辆名称
              <br />
              品牌
              <br />
              车牌号
              <br />
              品牌
              <br />
              车牌号
            </p>
          </Card>

          <Cell.Title text="固定宽高比的card，此处宽高比为1:1，图片16:9，超出文字部分将隐藏" />
          <Card shadow aspectRatio={1} style={{ width: '50%' }}>
            <Card.Figure
              aspectRatio={16 / 9}
              onClick={this.onClick}
              image="https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg"
            >
              <p style={{ color: 'white', padding: '10px' }}>车辆名称</p>
            </Card.Figure>
            <p style={{ padding: '10px' }}>
              车辆名称
              <br />
              品牌
              <br />
              车牌号
              <br />
              品牌
              <br />
              车牌号
            </p>
          </Card>

          <Cell.Title text="左右排列，16/9表示宽占16份，高占9份，图片占50%宽度" />
          <Card shadow aspectRatio={16 / 9} direction="row">
            <Card.Figure
              style={{ width: '50%' }}
              onClick={this.onClick}
              image="https://carphoto.aotuzuche.com/car/19/07/687221426/1562663319417_1.jpg"
            >
              <p style={{ color: 'white', padding: '10px' }}>车辆名称</p>
            </Card.Figure>
            <p style={{ padding: '10px' }}>
              车辆名称
              <br />
              品牌
            </p>
          </Card>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
