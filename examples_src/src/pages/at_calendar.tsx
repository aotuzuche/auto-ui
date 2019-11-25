import * as React from 'react'
import { AtCalendar } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <AtCalendar
        title="title"
        onClose={this.onClose}
        monthRange={[new Date(2019, 5), new Date(2019, 8)]}
        data={{
          [new Date(2019, 5, 2).valueOf()]: {
            rent: ['0000', '1200'],
            revert: ['0030', '1100'],
          },
          [new Date(2019, 5, 3).valueOf()]: {
            rent: ['0000', '1200'],
            revert: ['0030', '1100'],
          },
          [new Date(2019, 5, 4).valueOf()]: {
            price: 333,
            rent: ['0000', '1200'],
            revert: [['0030', '1100'], ['1300', '2000']],
          },
        }}
        onSubmit={this.onSubmit}
        onDayClick={this.onDayClick}
      />
    )
  }

  private onClose = () => {}

  private onSubmit = () => {}

  private onDayClick = async (day: Date, type: string) => {
    console.log(day, type)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          '201906020115': '草',
          '201906020130': '草草草',
        })
      }, 100)
    })
  }
}

export default Demo
