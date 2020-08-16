import * as React from 'react'
import { Cell, Layout } from '../auto-ui'

const Demo: React.FC<any> = () => {
  return (
    <Layout supportDarkMode={true}>
      <Layout.Body>
        <Cell.Title text="单元格" />
        <Cell>
          <Cell.Row>cell 1</Cell.Row>
          <Cell.Row>cell 2</Cell.Row>
          <Cell.Row>cell 3</Cell.Row>
          <Cell.Row>cell 4</Cell.Row>
          <Cell.Row>cell 5</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
