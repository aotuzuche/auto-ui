import React from 'react'
import { Cell, Popup, Button } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: false,
      customHeight: false,
      top: false,
      bg: false,
      padding: false,
      isScroll: false
    }
  }
  render() {
    return (
      <React.Fragment>
        <Cell>
          <Cell.Row
            onClick={() => {
              this.setState({
                default: true
              })
            }}
          >
            基本使用
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                customHeight: true
              })
            }}
          >
            自定义高度
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                top: true
              })
            }}
          >
            顶部
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                bg: true
              })
            }}
          >
            蒙层点击
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                padding: true
              })
            }}
          >
            不需要内 padding
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                isScroll: true
              })
            }}
          >
            滚动
          </Cell.Row>
        </Cell>
        <Popup visible={this.state.default}>基本使用</Popup>
        <Popup height="80" visible={this.state.customHeight}>
          自定义高度
        </Popup>
        <Popup top visible={this.state.top}>
          顶部
        </Popup>
        <Popup
          onBgClick={() => {
            this.setState({
              bg: false
            })
          }}
          visible={this.state.bg}
        >
          蒙层点击
        </Popup>
        <Popup noPadding visible={this.state.padding}>
          不需要内 padding
        </Popup>
        <Popup visible={this.state.isScroll} height="40">
          <h1>我是头，不需要滚动</h1>

          <Popup.Scroller>
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
          </Popup.Scroller>

          <Button>我是在最底下的按钮，同样不需要滚动</Button>
        </Popup>
      </React.Fragment>
    )
  }
}

export default A
