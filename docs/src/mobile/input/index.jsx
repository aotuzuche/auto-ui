import React from 'react'
import { Cell, Input } from 'auto-ui'

class InputDemo extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row>
          <Input placeholder="基本使用" />
        </Cell.Row>
        <Cell.Row>
          <Input placeholder="禁用" disabled />
        </Cell.Row>
        <Cell.Row>
          <Input placeholder="错误" error />
        </Cell.Row>
        <Cell.Row>
          <Input placeholder="左侧挂载" addonBefore={<a>Before</a>} />
        </Cell.Row>
        <Cell.Row>
          <Input type="text" placeholder="右侧挂载" addonAfter={<a>After</a>} />
        </Cell.Row>
        <Cell.Row>
          <Input placeholder="多行文本" multi />
        </Cell.Row>
      </Cell>
    )
  }
}

export default InputDemo
