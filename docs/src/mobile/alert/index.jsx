import React from 'react'
import { Cell, Alert, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row
          onClick={() => {
            Alert('基本使用')
          }}
        >
          基本使用
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            const { close } = Alert('主动关闭(2s)')
            setTimeout(() => {
              close()
            }, 2000)
          }}
        >
          主动关闭(2s)
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Alert({
              title: 'Hello',
              desc: 'World'
            })
          }}
        >
          标题+内容
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Alert({
              title: 'Hello',
              desc: '我是一个描述',
              btns: [
                {
                  name: 'monkey',
                  onClick: () => {
                    Toast.show('monkey')
                  }
                },
                {
                  name: 'kitty',
                  onClick: () => {
                    Toast.show('kitty')
                  }
                },
                {
                  name: 'world',
                  className: 'alert-world',
                  onClick: () => {
                    Toast.show('world')
                  },
                  report: {
                    name: 'world'
                  }
                }
              ]
            })
          }}
        >
          confirm 模式
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
