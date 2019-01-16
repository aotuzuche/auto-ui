import React from 'react'
import './style.scss'

import { Button, Cell } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      text: '点击加载'
    }
  }
  render() {
    return (
      <Cell>
        <Cell.Row>按钮类型</Cell.Row>
        <Cell.Row>
          <Button>默认</Button>
          <Button type="primary">primary</Button>
          <Button type="danger">danger</Button>
        </Cell.Row>
        <Cell.Row>空心类型</Cell.Row>
        <Cell.Row>
          <Button hollow>默认</Button>
          <Button hollow type="primary">
            primary
          </Button>
          <Button hollow type="danger">
            danger
          </Button>
        </Cell.Row>
        <Cell.Row>小按钮</Cell.Row>
        <Cell.Row className="space-between">
          <Button mini type="primary">
            小按钮
          </Button>
          <Button mini type="danger">
            小按钮
          </Button>
          <Button mini type="default">
            小按钮
          </Button>
        </Cell.Row>
        <Cell.Row>加载中</Cell.Row>
        <Cell.Row className="loading">
          <Button loading mini />
          <Button loading mini>
            加载中
          </Button>
          <Button type="primary" loading mini>
            加载中
          </Button>
          <Button type="primary" hollow loading mini>
            加载中
          </Button>
        </Cell.Row>
        <Cell.Row>禁用</Cell.Row>
        <Cell.Row>
          <Button disabled> 禁用</Button>
          <Button type="primary" disabled>
            禁用
          </Button>
          <Button hollow type="primary" disabled>
            禁用
          </Button>
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
