import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Popup</Button>
          <Popup visible={this.state.visible} noPadding={true}>
            <Layout>
              <Layout.Header
                title="头部"
                addonAfter={
                  <Button mini={true} onClick={this.onBtnClick}>
                    关闭
                  </Button>
                }
              />
              <Layout.Body>body</Layout.Body>
            </Layout>
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
