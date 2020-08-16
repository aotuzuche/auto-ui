import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false, direction: 'bottom' }

  render() {
    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Button data-direction="left" onClick={this.onBtnClick}>
            向左弹出
          </Button>
          <br />
          <Button data-direction="top" onClick={this.onBtnClick}>
            向上弹出
          </Button>
          <br />
          <Button data-direction="right" onClick={this.onBtnClick}>
            向右弹出
          </Button>
          <br />
          <Button data-direction="bottom" onClick={this.onBtnClick}>
            向下弹出
          </Button>
          <Popup
            smoothBorder
            direction={this.state.direction as any}
            width={80}
            height={80}
            visible={this.state.visible}
          >
            <h1>标题</h1>
            <p>内容</p>
            <br />
            <Button onClick={this.onBtnClick}>关闭</Button>
          </Popup>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = (evt: any) => {
    const direction = evt.target.dataset.direction
    if (direction) {
      this.setState({ direction })
    }
    this.setState({ visible: !this.state.visible })
  }
}

export default Demo
