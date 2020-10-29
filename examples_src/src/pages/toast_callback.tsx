import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('我是一个提示', () => {
      Toast('callback')
    })
  }

  const onClickByDuration = () => {
    Toast('我是一个提示', 5000, () => {
      Toast('callback')
    })
  }

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
        <br />
        <Button onClick={onClickByDuration}>点击打开5秒</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
