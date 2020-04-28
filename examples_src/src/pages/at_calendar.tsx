import * as React from 'react'
import { AtCalendar } from '../auto-ui'

class Demo extends React.PureComponent {
  render() {
    return (
      <AtCalendar
        title="title"
        onClose={this.onClose}
        chooseRange={[new Date(2019, 5, 5), new Date(2019, 5, 7, 13)]}
        defaultRentTime="10:30"
        defaultRevertTime="05:10"
        minHours={8}
        chooseTips={() => [new Date(2019, 5, 9), '起止30天']}
        footerTips={(t1, t2) => {
          if (!t1) {
            return "取车"
          }
          if (!t2) {
            return "还车"
          }
          return "选好了"
        }}
        checkTimeRange={(t1, t2) => {
          return null
        }}
        data={{
          [new Date(2019, 5, 2).valueOf()]: {},
          [new Date(2019, 5, 3).valueOf()]: {},
          [new Date(2019, 5, 4).valueOf()]: {},
          [new Date(2019, 5, 5).valueOf()]: {},
          [new Date(2019, 5, 6).valueOf()]: {},
          [new Date(2019, 5, 7).valueOf()]: {},
          [new Date(2019, 6, 8).valueOf()]: {},
          [new Date(2019, 5, 9).valueOf()]: {},
          // [new Date(2019, 5, 4).valueOf()]: {
          //   price: 333,
          //   rent: ['0000', '1200'],
          //   revert: [['0030', '1100'], ['1300', '2000']],
          //   badge: '限',
          // },
        }}
        onSubmit={this.onSubmit}
        onDayClick={this.onDayClick}
      />
    )
  }

  private onClose = () => {}

  private onSubmit = () => {}

  private onDayClick = async (day: Date, type: string) => {
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
