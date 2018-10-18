import React from 'react'
import { A, Cell, Toast } from 'auto-ui'

class DemoA extends React.Component {
  click() {
    Toast('Click Me!!!')
  }
  clickReport() {
    Toast('控制台查看')
  }
  render() {
    return (
      <Cell>
        <Cell.Row>
          <A onClick={this.click} disabled>Click Me!!!</A>
        </Cell.Row>
        <Cell.Row>
          <A onClick={this.clickReport} report={{ foo: 'bar' }}>
            发送统计报告
          </A>
        </Cell.Row>
      </Cell>
    )
  }
}

export default DemoA
