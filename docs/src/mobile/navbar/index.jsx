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
        <ul>
          <li />
        </ul>
        <NavBar title="自定义按钮" leftBtn="返回上一页" rightBtn="自定义右侧" />
        <ul>
          <li />
        </ul>
        <NavBar
          title="深色模式"
          dark
          leftBtn
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
