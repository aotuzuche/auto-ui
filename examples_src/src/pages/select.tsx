import * as React from 'react'
import { Layout, Select } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const [selectVo, setSelectVo] = React.useState({
    label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)',
    value: 6,
  })

  const onChange = (option: any) => {
    setSelectVo(option)
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body style={{ paddingTop: '300px' }}>
        <div>这是测试select</div>
        <div>根据点击位置，自动算出select位置</div>
        <div style={{ margin: '20px' }}>
          <Select
            data={[
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 1 },
              {
                label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)测试1234对对对顶顶顶顶订单',
                value: 2,
              },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 3 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 4 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 5 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 6 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 7 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 8 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 9 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 10 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 11 },
            ]}
            placeholder="请输入"
            noDataElement="暂无数据"
            current={selectVo}
            onChange={onChange}
          />
        </div>

        <div style={{ margin: '20px' }}>
          <Select
            data={[
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 1 },
              {
                label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)测试1234对对对顶顶顶顶订单',
                value: 2,
              },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 3 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 4 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 5 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 6 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 7 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 8 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 9 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 10 },
              { label: '18130202504299 (沪A23456，2024.5.21-2024.5.22)', value: 11 },
            ]}
            // value={selectVo.value}
            placeholder="请输入"
            noDataElement="暂无数据"
            current={selectVo}
            onChange={onChange}
          />
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
