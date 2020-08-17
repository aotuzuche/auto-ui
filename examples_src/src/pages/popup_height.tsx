import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false, height: 30 }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick.bind(null, 30)}>显示30%高的Popup</Button>
          <br />
          <Button onClick={this.onBtnClick.bind(null, 100)}>显示100%高的Popup</Button>
          <Popup height={this.state.height} visible={this.state.visible}>
            <h1>标题</h1>
            <p>内容</p>
            <br />
            <Button onClick={this.onBtnClick.bind(null, this.state.height)}>关闭</Button>
          </Popup>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = (height: number) => {
    this.setState({ visible: !this.state.visible, height })
  }
}

export default Demo
