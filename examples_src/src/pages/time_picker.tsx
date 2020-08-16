import * as React from 'react'
import { Button, Layout, Popup, TimePicker, Toast } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    const data = [
      {
        day: new Date(2018, 4, 1),
        times: ['0020', '0020'],
      },
      {
        day: new Date(2018, 4, 2),
        times: ['0500', '1100'],
      },
      {
        day: new Date(2018, 4, 3),
        times: [
          ['0000', '0015'],
          ['0145', '1200'],
        ],
      },
    ]

    return (
      <Layout supportDarkMode={true}>
        <Layout.Body>
          <Button
            onClick={() => {
              this.setState({ visible: true })
            }}
          >
            打开time picker
          </Button>
        </Layout.Body>
        <Popup
          visible={this.state.visible}
          onMaskClick={() => {
            this.setState({ visible: false })
          }}
          noPadding={true}
          height="3.9rem"
        >
          <TimePicker
            data={data}
            format={['MM月dd日 周wk', 'h点', 'm分']}
            interval={66}
            defaultDay={new Date(2018, 4, 3, 2, 0)}
            defaultTime="04:00"
            onChange={this.showTime}
          />
        </Popup>
      </Layout>
    )
  }

  private showTime = (value: Date) => {
    Toast(value.toString())
  }
}

export default Demo
