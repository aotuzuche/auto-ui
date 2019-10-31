import * as React from 'react'
import { Button, Dialog, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Dialog</Button>
          <Dialog visible={this.state.visible} height={40}>
            <p>头部，不会滚动</p>
            <p>注意：若要滚动，height属性不可缺少</p>
            <Dialog.Scroller style={{ border: '1px solid #f00' }}>
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
            </Dialog.Scroller>
            <p>底部，不会滚动</p>
            <Button mini={true} onClick={this.onBtnClick}>
              关闭
            </Button>
          </Dialog>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = () => {
    this.setState({ visible: !this.state.visible })
  }
}

export default Demo
