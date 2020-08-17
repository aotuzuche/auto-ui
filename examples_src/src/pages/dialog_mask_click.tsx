import * as React from 'react'
import { Button, Dialog, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Dialog</Button>
          <Dialog visible={this.state.visible} onMaskClick={this.onMaskClick}>
            <p>点击外部的半透明层可以关闭</p>
          </Dialog>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = () => {
    this.setState({ visible: true })
  }

  private onMaskClick = () => {
    this.setState({ visible: false })
  }
}

export default Demo
