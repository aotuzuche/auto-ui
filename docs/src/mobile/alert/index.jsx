import React from 'react'
import { Cell, Alert, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row
          onClick={async () => {
            await Alert('基本使用')
            console.log(123)
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
            Alert('关闭通知', () => {
              Toast('我关闭了')
            })
          }}
        >
          关闭通知
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
                    Toast('monkey')
                  },
                  mini: true
                },
                {
                  name: 'world',
                  className: 'alert-world',
                  onClick: () => {
                    Toast('world')
                  },
                  mini: true,
                  type: 'danger',
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
        <Cell.Row
          onClick={async () => {
            await Alert.async({
              title: '异步模式',
              desc: '我是一个描述'
            })
          }}
        >
          异步模式
        </Cell.Row>
      </Cell>
    )
  }
}

export default A
