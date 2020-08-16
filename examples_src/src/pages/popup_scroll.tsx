import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Popup</Button>
          <Popup visible={this.state.visible} height={40} smoothBorder top>
            <p>头部，不会滚动</p>
            <p>注意：若要滚动，height属性不可缺少</p>
            <Popup.Scroller style={{ border: '1px solid #f00' }}>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
              <p>滚动区</p>
            </Popup.Scroller>
            <p>底部，不会滚动</p>
            <Button onClick={this.onBtnClick}>关闭</Button>
          </Popup>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = () => {
    this.setState({ visible: !this.state.visible })
  }
}

export default Demo
