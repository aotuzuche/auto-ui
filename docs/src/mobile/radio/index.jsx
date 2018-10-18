import React from 'react'

import { Radio, Cell } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <Cell>
        <Cell.Row>
          <Radio
            checked={this.state.checked}
            value={1}
            text="基本使用"
            onChange={val => {
              this.setState({
                checked: !this.state.checked
              })
            }}
          />
        </Cell.Row>
        <Cell.Row>
          <Radio disabled text="禁用" />
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
