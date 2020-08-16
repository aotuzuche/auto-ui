import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Popup</Button>
          <Popup visible={this.state.visible} onMaskClick={this.onBtnClick}>
            <p>点击外部的半透明层可以关闭</p>
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
