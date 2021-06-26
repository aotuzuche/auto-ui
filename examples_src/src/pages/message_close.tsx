import * as React from 'react'
import { Button, Layout, Message } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Message('提示消息')
  }

  const onClose = () => {
    Message.close()
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
        <br />
        <Button onClick={onClose}>点击关闭</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
