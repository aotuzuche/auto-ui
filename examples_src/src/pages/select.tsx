import * as React from 'react'
import { Button, Layout, Select } from '../auto-ui'

const Demo: React.FC<any> = () => {
  const selectRef = React.useRef(null)
  const selectRef1 = React.useRef(null)

  const [selectVo, setSelectVo] = React.useState({ label: '', value: -1 })
  const [selectVo1, setSelectVo1] = React.useState({ label: '', value: -1 })

  const [btnRef, setBtnRef] = React.useState<HTMLElement | null>(null)
  const [btnRef1, setBtnRef1] = React.useState<HTMLElement | null>(null)

  const onClick = () => {
    if (selectRef.current) {
      ;(selectRef.current as any).show()
    }
  }

  React.useEffect(() => {
    const c = document.getElementById('selectRef')
    setBtnRef(c)

    const c1 = document.getElementById('selectRef1')
    setBtnRef1(c1)
  }, [])

  const onChange = (option: any) => {
    console.log(option)
    setSelectVo(option)
  }

  const onChange1 = (option: any) => {
    console.log(option)
    setSelectVo1(option)
  }

  return (
    <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
      <Layout.Body>
        <div>这是测试select</div>
        <div>根据点击位置，自动算出select位置</div>
        <div style={{ margin: '20px' }}>
          <Button onClick={onClick} id="selectRef">
            {selectVo.label || '点我'}
          </Button>
          <Select
            ref={selectRef}
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
            value={selectVo.value}
            referenceRef={btnRef}
            onChange={onChange}
          />
        </div>

        <div style={{ margin: '30px' }}>
          <div
            onClick={() => {
              if (selectRef1.current) {
                ;(selectRef1.current as any).show()
              }
            }}
            id="selectRef1"
          >
            {selectVo1.label || '测试'}
          </div>
          <Select
            ref={selectRef1}
            height={200}
            left={40}
            right={40}
            data={[
              { label: '奔驰', value: 1 },
              {
                label: '宝马',
                value: 2,
              },
              { label: '大众', value: 3 },
              { label: '小鹏', value: 4 },
              { label: '法拉利', value: 5 },
              { label: '宾利', value: 6 },
            ]}
            value={selectVo1.value}
            referenceRef={btnRef1}
            onChange={onChange1}
          />
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default Demo
