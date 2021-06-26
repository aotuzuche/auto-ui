import * as React from 'react'
import { Alert, Button, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = async () => {
    const value = await Alert.async({
      title: '我是一个提示框',
      btns: [
        { name: '取消', value: 'cancel' },
        { name: '确定', value: 'ok' },
      ],
    })
    Toast(String(value))
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Button onClick={onClick}>点击打开</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
