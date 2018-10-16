import React from 'react'
import { Cell, Dialog, Button } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: false,
      isBgClick: false,
      isCustomHeight: false,
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
            基础用法
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                isBgClick: true
              })
            }}
          >
            蒙层点击
          </Cell.Row>
          <Cell.Row
            onClick={() => {
              this.setState({
                isCustomHeight: true
              })
            }}
          >
            自定义高度
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

        <Dialog visible={this.state.default}>基础用法</Dialog>

        <Dialog
          onBgClick={() => {
            this.setState({
              isBgClick: false
            })
          }}
          visible={this.state.isBgClick}
        >
          蒙层点击
        </Dialog>

        <Dialog visible={this.state.isCustomHeight} height="80">
          自定义高度
        </Dialog>

        <Dialog visible={this.state.isScroll} height="40">
          <h1>我是头，不需要滚动</h1>

          <Dialog.Scroller>
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
            我是内容，高度不确定，如果太多了就在内部滚动
          </Dialog.Scroller>

          <Button>我是在最底下的按钮，同样不需要滚动</Button>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default A
