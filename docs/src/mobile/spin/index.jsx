import React from 'react'
import { Spin, Cell } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row>
          <Spin className="a" />
        </Cell.Row>
        <Cell.Row>
          <Spin className="b" text="显示文字" />
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
