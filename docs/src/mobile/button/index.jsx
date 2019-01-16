import React from 'react'

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
        <Cell.Row>默认使用</Cell.Row>
        <Cell.Row>
          <Button>默认使用</Button>
        </Cell.Row>
        <Cell.Row>使用 type</Cell.Row>
        <Cell.Row>
          <Button type="primary">Primary Button</Button>
        </Cell.Row>
        <Cell.Row>
          <Button type="danger">Danger Button</Button>
        </Cell.Row>
        <Cell.Row>
          <Button type="default">Default Button</Button>
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
        <Cell.Row>
          <Button loading mini />
          <Button loading mini>
            加载中
          </Button>
        </Cell.Row>
        <Cell.Row>禁用</Cell.Row>
        <Cell.Row>
          <Button disabled> 禁用</Button>
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
