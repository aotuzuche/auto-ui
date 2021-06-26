import * as React from 'react'
import { Button, Layout, Message } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Message('我是一个消息框', 200000)
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
      <Layout.Footer borderType="border" />
    </Layout>
  )
}

export default Demo
