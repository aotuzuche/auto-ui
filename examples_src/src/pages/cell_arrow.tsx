import * as React from 'react'
import { Cell, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={true}>
      <Layout.Body>
        <Cell>
          <Cell.Row arrow={true}>有箭头</Cell.Row>
          <Cell.Row>没有箭头</Cell.Row>
          <Cell.Row arrow={true}>有箭头</Cell.Row>
          <Cell.Row>没有箭头</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
