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
          <h2>sss</h2>
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
        <Cell indentLine>
          <Cell.Row>A</Cell.Row>
        </Cell>
        <Cell arrow>
          <Cell.Row>A</Cell.Row>
        </Cell>
      </React.Fragment>
    )
  }
}

export default A
