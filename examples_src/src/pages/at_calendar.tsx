import * as React from 'react'
import { AtCalendar } from '../auto-ui'

class Demo extends React.PureComponent {
  state = {
    calendar: {
      [new Date(2019, 5, 2).valueOf()]: { price: 333 },
      [new Date(2019, 5, 3).valueOf()]: { price: 333 },
      [new Date(2019, 5, 4).valueOf()]: { price: 333 },
      [new Date(2019, 5, 5).valueOf()]: { price: 333 },
      [new Date(2019, 5, 6).valueOf()]: {},
      [new Date(2019, 5, 7).valueOf()]: {},
      [new Date(2019, 5, 8).valueOf()]: {},
      [new Date(2019, 5, 9).valueOf()]: {},
      [new Date(2019, 5, 10).valueOf()]: { isHoliday: true, price: 888 },
      [new Date(2019, 5, 11).valueOf()]: { isHoliday: true },
      [new Date(2019, 5, 12).valueOf()]: {},
      [new Date(2019, 5, 13).valueOf()]: {},
      [new Date(2019, 5, 14).valueOf()]: {},
    },
  }

  render() {
    return (
      <AtCalendar
        title="查看可租用时间"
        onClose={this.onClose}
        type="secondary"
        chooseRange={[new Date(2019, 5, 5, 10), new Date(2019, 5, 7, 13)]}
        monthRange={[new Date(2019, 5), new Date(2019, 10)]}
        defaultRentTime="10:30"
        defaultRevertTime="05:15"
        minHours={8}
        // lockRentTime={true}
        chooseTips={(t1, t2) => {
          console.log(t1, t2)
          return [
            { day: new Date(2019, 5, 7), tips: '起止30天起', hideAt: 'never' },
            { day: new Date(2019, 5, 14), tips: '起止30天起', hideAt: 'never' },
            { day: new Date(2019, 5, 12), tips: '起止30天起', hideAt: 'never' },
          ]
        }}
        headerTips={(t1, t2) => {
          if (!t1 || !t2) {
            return ''
          }
          return '?????'
        }}
        onHeaderTipsClick={(t1, t2) => {
          console.log('click', t1, t2)
        }}
        footerTips={(t1, t2) => {
          if (!t1) {
            return '取车'
          }
          if (!t2) {
            return '还车'
          }
          return '选好了'
        }}
        checkTimeRange={(t1, t2) => {
          return null
        }}
        data={this.state.calendar as any}
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
