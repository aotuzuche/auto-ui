import * as React from 'react'
import { Alert, Button, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClickA = () => {
    Alert({
      title: '您确定要删除此项吗？',
      desc: '您确定要删除此项吗？您确定要删除此项吗？您确定要删除此项吗？',
      btns: [
        { name: '取消', type: 'primary', hollow: true },
        { name: '删除', type: 'primary' },
      ],
    })
  }

  const onClickB = () => {
    Alert({
      title: '您确定要删除此项吗？',
      desc: '您确定要删除此项吗？您确定要删除此项吗？您确定要删除此项吗？',
      btnDirection: 'column',
      btns: [
        { name: '取消', type: 'primary', hollow: true },
        { name: '删除', type: 'primary' },
      ],
    })
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Button onClick={onClickA}>横向按钮</Button>
        <br />
        <Button onClick={onClickB}>纵向按钮</Button>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
