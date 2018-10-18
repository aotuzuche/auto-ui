import React from 'react'
import './style'
import { Tabs } from 'auto-ui'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 1
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          <li />
        </ul>
        <Tabs
          active={this.state.active}
          onClick={val => {
            this.setState({
              active: val
            })
          }}
        >
          <Tabs.Item value={1}>Tab a</Tabs.Item>
          <Tabs.Item value={2}>Tab b</Tabs.Item>
          <Tabs.Item value={3}>Tab c</Tabs.Item>
        </Tabs>
        {this.state.active === 1 && <div className="tab tab-a">Tab a</div>}
        {this.state.active === 2 && <div className="tab tab-b">Tab b</div>}
        {this.state.active === 3 && <div className="tab tab-c">Tab c</div>}
      </React.Fragment>
    )
  }
}

export default A
