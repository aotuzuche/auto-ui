import React from 'react'
import { NavBar, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li />
        </ul>
        <NavBar title="基本使用" />
        <ul>
          <li />
        </ul>
        <NavBar
          title="左侧按钮"
          leftBtn
          leftClick={() => {
            Toast('点击了左侧按钮')
          }}
        />
        <ul>
          <li />
        </ul>
        <NavBar
          title="右侧按钮"
          rightBtn
          rightClick={() => {
            Toast('点击了右侧按钮')
          }}
        />
      </React.Fragment>
    )
  }
}

export default A
