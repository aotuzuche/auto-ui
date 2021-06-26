import * as React from 'react'
import { Button, Dialog, Input, Layout } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Dialog</Button>
          <Dialog
            visible={this.state.visible}
            title="请设置您的登录密码"
            onCloseClick={this.onBtnClick}
          >
            <Input capsule={true} placeholder="请输入" />
            <br />
            <Button onClick={this.onBtnClick}>关闭</Button>
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
