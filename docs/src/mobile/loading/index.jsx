import React from 'react'
import { Cell, Loading } from 'auto-ui'

class DemoLoading extends React.Component {
  render() {
    return (
      <Cell>
        <Cell.Row
          onClick={() => {
            Loading()
            setTimeout(() => {
              Loading.hide()
            }, 1000)
          }}
        >
          基本使用
        </Cell.Row>

        <Cell.Row
          onClick={() => {
            const { close } = Loading('加载中...')

            setTimeout(() => {
              close()
            }, 1000)
          }}
        >
          提示
        </Cell.Row>
        <Cell.Row
          onClick={() => {
            const { close } = Loading('手动关闭')
            setTimeout(() => {
              close()
            }, 2000)
          }}
        >
          手动关闭
        </Cell.Row>
      </Cell>
    )
  }
}

export default DemoLoading
