import * as React from 'react'
import { Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Toast('我是一个会显示很久的轻提示', 10000000)
  }

  const onClose = () => {
    Toast.close()
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
