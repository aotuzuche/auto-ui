import * as React from 'react'
import { Layout, Tabs } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const [val, setVal] = React.useState(1)

  return (
    <Layout>
      <Layout.Header
        title="标题"
        tabs={
          <Tabs onClick={(val: any) => setVal(val)} active={val}>
            <Tabs.Item value={1}>全部订单</Tabs.Item>
            <Tabs.Item value={2}>进行中的</Tabs.Item>
            <Tabs.Item value={3}>已完成的</Tabs.Item>
          </Tabs>
        }
      />
      <Layout.Body>body</Layout.Body>
    </Layout>
  )
}

export default Demo
