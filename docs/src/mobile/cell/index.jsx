import React from 'react'

import { Cell, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Cell
          onClick={() => {
            console.log(2)
          }}
        >
          <Cell.Row
            onClick={() => {
              console.log(1)
            }}
          >
            基本使用
          </Cell.Row>
        </Cell>
        <h1 className="cell-title">统一点击事件</h1>
        <Cell
          onClick={val => {
            Toast.show(val)
          }}
        >
          <Cell.Row value="第一项">第一项</Cell.Row>
          <Cell.Row value="第二项">第二项</Cell.Row>
          <Cell.Row value="第三项">第三项</Cell.Row>
          <Cell.Row value="第四项">第四项</Cell.Row>
        </Cell>
        <h1 className="cell-title">分隔线缩进</h1>
        <Cell indentLine>
          <Cell.Row>朋友圈</Cell.Row>
          <Cell.Row>附近的人</Cell.Row>
          <Cell.Row>游戏</Cell.Row>
          <Cell.Row arrow>小程序</Cell.Row>
        </Cell>
        <h1 className="cell-title">带箭头</h1>
        <Cell arrow>
          <Cell.Row>个人信息</Cell.Row>
          <Cell.Row>简介</Cell.Row>
          <Cell.Row>昵称</Cell.Row>
        </Cell>
      </React.Fragment>
    )
  }
}

export default A
