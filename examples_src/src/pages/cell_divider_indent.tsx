import * as React from 'react'
import { Cell, Layout, Toast } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const onClick = (value: string) => {
    Toast('点击了：' + value)
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <Cell.Title text="分隔线缩进: 左侧缩进" />
        <Cell onClick={onClick} arrow={true} dividerIndent="left">
          <Cell.Row value="1">cell 1</Cell.Row>
          <Cell.Row value="2" addonAfter="123">
            cell 2
          </Cell.Row>
        </Cell>
        <Cell.Title text="分隔线缩进: 两头缩进" />
        <Cell onClick={onClick} arrow={true} dividerIndent="both">
          <Cell.Row value="1">cell 1</Cell.Row>
          <Cell.Row value="2">cell 2</Cell.Row>
        </Cell>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
