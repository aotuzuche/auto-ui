import React from 'react'
import { Popup } from 'auto-ui'
import { TimePicker } from 'auto-ui/time-picker/index.jsx'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.data = [
      {
        day: new Date(2018, 4, 1),
        times: ['0000', '1015']
      },
      {
        day: new Date(2018, 4, 2),
        times: ['0500', '1100']
      },
      {
        day: new Date(2018, 4, 3),
        times: [['0000', '0015'], ['0145', '1200']]
      }
    ]
  }
  render() {
    return (
      <Popup visible height="40">
        <TimePicker
          data={this.data}
          format={['MM月dd日 周wk', 'h点', 'm分']}
          interval={1}
          defaultDay={new Date(2018, 4, 3, 2, 0)}
          ref={e => {
            this.tp = e
          }}
          onChange={() => {}}
        />
      </Popup>
    )
  }
}

export default A
