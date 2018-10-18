import React from 'react'

import { Cell, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row
          onClick={() => {
            Toast('基本使用')
          }}
        >
          基本使用
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Toast('5 秒提示', 5000)
          }}
        >
          自定义时长
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            const { close } = Toast('手动关闭')

            setTimeout(() => {
              close()
            }, 1000)
          }}
        >
          手动关闭
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
