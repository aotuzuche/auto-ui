import React from 'react'
import { Spin, Cell } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row>
          <Spin />
        </Cell.Row>
        <Cell.Row>
          <Spin text="显示文字" />
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
