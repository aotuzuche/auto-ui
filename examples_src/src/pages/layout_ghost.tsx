import * as React from 'react'
import { Cell, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header title="标题" ghost={true} onBackClick={() => {}} addonAfter={<a>链接</a>} />
      <Layout.Body style={{ marginTop: '-1rem' }}>
        <div
          style={{
            backgroundColor: '#222',
            height: '300px',
            margin: '-0.4rem -0.4rem 0.4rem -0.4rem',
          }}
        />
        <Cell>
          <Cell.Row>A</Cell.Row>
          <Cell.Row>B</Cell.Row>
          <Cell.Row>C</Cell.Row>
          <Cell.Row>D</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
