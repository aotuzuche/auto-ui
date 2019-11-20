import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('我是一个显示5秒提示', 5000)
  }

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开并显示5秒</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
