import React from 'react'
import './style'
import { Switch, Cell } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: false,
      icon: false
    }
  }
  render() {
    return (
      <Cell className="switch">
        <Cell.Row>
          <Switch
            active={this.state.active}
            onChange={() => {
              this.setState({
                active: !this.state.active
              })
            }}
          />
          <span>基本使用</span>
        </Cell.Row>
        <Cell.Row>
          <Switch
            i="关"
            o="开"
            active={this.state.text}
            onChange={() => {
              this.setState({
                text: !this.state.text
              })
            }}
          />
          <span>带文字</span>
        </Cell.Row>
        <Cell.Row>
          <Switch
            icon
            active={this.state.icon}
            onChange={() => {
              this.setState({
                icon: !this.state.icon
              })
            }}
          />
          <span>带图标</span>
        </Cell.Row>
        <Cell.Row>
          <Switch disabled />
          <span>禁用</span>
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
