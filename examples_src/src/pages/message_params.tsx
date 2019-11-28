import * as React from 'react'
import { Button, Layout, Message, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = () => {
    Message({
      title: '收藏成功',
      desc: '您可以在我的收藏中查看',
      feedback: '好的没问题',
      onFeedbackClick: () => {
        Toast('onFeedbackClick')
      },
    })
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
