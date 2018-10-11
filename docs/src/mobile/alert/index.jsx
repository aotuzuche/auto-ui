import React from 'react'
import { Cell, Alert, Toast } from 'auto-ui'

class A extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row
          onClick={() => {
            Alert.show('基本使用')
          }}
        >
          基本使用
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Alert.show('基本使用')
            setTimeout(() => {
              Alert.hide()
            }, 2000)
          }}
        >
          主动关闭(2s)
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Alert.show({
              title: 'Hello',
              desc: 'World'
            })
          }}
        >
          标题+内容
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            Alert.show({
              title: 'Hello',
              desc: 'world',
              btnTextN: 'monkey',
              btnTextY: 'kitty',
              callbackY: () => {
                Toast.show('kitty')
              },
              callbackN: () => {
                Toast.show('monkey')
              }
            })
          }}
        >
          confirm 模式
        </Cell.Row>
        {/* <Cell.Row><Alert decs="ss"></Alert></Cell.Row> */}
      </Cell>
    )
  }
}

export default A
