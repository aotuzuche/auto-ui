import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('我是一个会显示很久的轻提示，但3秒后被强制关闭', 10000000)
    setTimeout(() => {
      Toast.hide()
    }, 3000)
  }

  return (
    <Layout>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
