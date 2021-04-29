import cn from 'classnames'
import * as React from 'react'
import { dateFormat, offsetDays } from '../__utils/transfer'
import Button from '../button'
import Icon from '../icon'
import Layout from '../layout'
import Popup from '../popup'
import TimePicker from '../time-picker'
import Controller from './controller'
import './style/index.scss'

class AtCalendar extends Controller {
  render() {
    return (
      <Layout className="at-calendar" supportDarkMode={this.props.supportDarkMode}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
        {this.renderTimePicker()}
      </Layout>
    )
  }

  // 页头
  private renderHeader() {
    const d1 = this.state.chooseRange[0]
    const d2 = this.state.chooseRange[1]
    const t1 = this.state.timePickerTimes[0]
    const t2 = this.state.timePickerTimes[1]
    const pt2 = this.props.chooseRange ? this.props.chooseRange[1] : void 0

    // 周n，(0~6)
    let week = new Date().getDay() - 1
    if (week === -1) {
      week = 6
    }
    const weeks = '一二三四五六日'

    return (
      <Layout.Header
        className="header"
        onCloseClick={this.props.onClose}
        title={this.props.title}
        headline={this.props.readonly}
        addonAfter={
          !this.props.readonly && (
            <a
              className={cn('clear', {
                disabled:
                  (!t1 && !t2) ||
                  (this.props.lockRentTime && pt2 && t2 && pt2.valueOf() === t2.valueOf()),
              })}
              onClick={this.clearChooseRange}
            >
              {this.props.lockRentTime ? '复原' : '清空'}
            </a>
          )
        }
        addonBottom={
          <div className="addon-bottom">
            {!this.props.readonly && (
              <div
                className={cn('time-range', {
                  'choose-from': !t1,
                  'choose-to': (!!t1 && !t2) || this.props.lockRentTime,
                  'choose-finished': !!t1 && !!t2 && !this.props.lockRentTime,
                })}
              >
                <div className="date from">
                  <h6>{d1 ? dateFormat(d1, 'M月d日 周wk') : '取车时间'}</h6>
                  <p>{t1 ? dateFormat(t1, 'hh:mm') : '请设置'}</p>
                </div>
                <div className="date to">
                  <h6>{d2 ? dateFormat(d2, 'M月d日 周wk') : '还车时间'}</h6>
                  <p>{t2 ? dateFormat(t2, 'hh:mm') : '请设置'}</p>
                </div>
                <i className="point" />
              </div>
            )}
            <ul className="weeks">
              {weeks.split('').map((w, i) => (
                <li key={w} className={cn({ active: this.props.readonly && i === week })}>
                  {w}
                </li>
              ))}
            </ul>
            {this.renderHeaderTips()}
          </div>
        }
      />
    )
  }

  // 主体
  private renderBody() {
    return (
      <Layout.Body
        className={cn('body', { 'has-header-tips': this.state.headerTips !== '' })}
        id="x-calendar-body"
      >
        {this.getMonthList().map(month => {
          return this.renderMonth(month)
        })}
      </Layout.Body>
    )
  }

  // 月
  private renderMonth(month: Date) {
    const y = month.getFullYear()
    const m = month.getMonth()
    let w = month.getDay() - 1
    if (w === -1) {
      w = 6
    }
    const space = (() => {
      const arr = []
      for (let i = 0; i < w; i++) {
        arr.push('')
      }
      return arr
    })()
    const count = new Date(y, m + 1, 0).getDate()
    const list = []
    for (let i = 0; i < count; i++) {
      list.push(new Date(y, m, i + 1))
    }
    return (
      <div className="month" key={month.valueOf()}>
        <h2 className="month-title">{`${m + 1}月`}</h2>
        <div className="list">
          {space.map((_, i) => (
            <span className="month-day empty" key={i} />
          ))}
          {list.map(date => this.renderMonthDay(date))}
        </div>
      </div>
    )
  }

  // 月份的每一天
  private renderMonthDay(date: Date) {
    const key = date.valueOf()
    const data: any =
      this.props.data && this.props.data[key] ? this.props.data[key] : { disabled: 'DISABLED' }
    let isDisabledBefore = this.props.disabledBefore ? this.props.disabledBefore > date : false
    if (data.disabled === 'DISABLED') {
      isDisabledBefore = true
    }
    const readonly = this.props.readonly
    const wkname = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']
    const currentWk = wkname[date.getDay()]
    const isBtween = this.isBtweenChooseRange(date)
    const active = !readonly && isBtween
    const activeFirst =
      !readonly && this.state.chooseRange[0] && this.state.chooseRange[0].valueOf() === key
    const activeEnd =
      !readonly && this.state.chooseRange[1] && this.state.chooseRange[1].valueOf() === key
    const css = cn('month-day', currentWk, {
      active,
      'active-first': activeFirst,
      'active-end': activeEnd,
      disabled: isDisabledBefore,
      'is-holiday': data.isHoliday,
      'disabled-all': !isDisabledBefore && data.disabled === 'ALL',
      'disabled-part': !isDisabledBefore && data.disabled === 'PART',
    })
    const onClick = () => {
      if ((isDisabledBefore || readonly || data.disabled) && !isBtween) {
        return
      }
      this.onDayClick(date, data)
    }

    // 如果提示的年月日是这天，在这天添加提示内容
    let tipsData: any = null
    const startDay = this.state.chooseRange[0]

    if (this.state.chooseType !== '' && startDay) {
      this.state.chooseTipsData.forEach(c => {
        const d = c.day
        if (
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate()
        ) {
          if (c.hideAt && c.hideAt === 'never') {
            tipsData = c
          }
          if (this.state.chooseTipsVisible && (!c.hideAt || c.hideAt === 'chooseEnd')) {
            tipsData = c
          }
        }
      })
    }

    let priceTxt = ''
    if (data.price) {
      priceTxt = `${data.isHoliday ? '节' : ''}￥${data.price}`
    } else if (data.isHoliday) {
      priceTxt = '节假日'
    }

    return (
      <div className={css} key={key} onClick={onClick}>
        {tipsData && <div className="choose-tips">{tipsData.tips}</div>}
        <p>
          <em>{date.getDate()}</em>
          {data.badge ? <i className="badge">{data.badge}</i> : null}
        </p>
        <span>{priceTxt}</span>
      </div>
    )
  }

  // 头上的提示
  private renderHeaderTips() {
    if (!this.state.headerTips) {
      return null
    }

    return (
      <p
        className={cn('header-tips', { 'has-link': !!this.props.onHeaderTipsClick })}
        onClick={() => {
          if (this.props.onHeaderTipsClick) {
            this.props.onHeaderTipsClick(this.state.chooseRange[0], this.state.chooseRange[1])
          }
        }}
      >
        {this.state.headerTips}
        {this.props.onHeaderTipsClick && <Icon.Arrow className="arrow" />}
      </p>
    )
  }

  // 页脚的提示
  private renderFooterTips() {
    if (this.state.footerTips) {
      return this.state.footerTips
    }

    const min = this.props.minHours || 0
    const times = this.state.timePickerTimes
    const chooseOk = times[0] !== void 0 && times[1] !== void 0
    let tips = '请选择租期'
    if (min >= 24) {
      tips = `${Math.round((min / 24) * 100) / 100}天起租`
    } else if (min > 0) {
      tips = `${min}小时起租`
    }

    if (chooseOk) {
      return (
        <p className="def-tips-txt">
          共计<strong>{offsetDays(times[0]!, times[1]!)}</strong>
        </p>
      )
    } else {
      return <p className="def-tips-txt">{tips}</p>
    }
  }

  // 页脚
  private renderFooter() {
    return (
      <Layout.Footer className="footer" borderType="shadow">
        <div className="tips">
          <p>
            <i />
            全天可租
          </p>
          <p>
            <i className="part" />
            部分时段可租
          </p>
        </div>
        {!this.props.readonly && (
          <div className="bottom">
            <div className="footer-tips">{this.renderFooterTips()}</div>
            <Button className="submit" onClick={this.onSubmit}>
              确定
            </Button>
          </div>
        )}
      </Layout.Footer>
    )
  }

  // 时间选择器
  private renderTimePicker() {
    const { defaultRentTime, defaultRevertTime } = this.props
    const { chooseType } = this.state
    let def = new Date(2000, 1, 1)
    if (this.state.chooseType === 'rent' && this.state.chooseRange[0]) {
      def = this.state.chooseRange[0]
    } else if (this.state.chooseType === 'revert' && this.state.chooseRange[1]) {
      def = this.state.chooseRange[1]
    }
    if (
      this.state.chooseType === 'rent' &&
      this.state.preChooseRange[0] &&
      def.valueOf() === this.state.preChooseRange[0].valueOf()
    ) {
      def = this.state.preTimePickerTimes[0]!
    } else if (
      this.state.chooseType === 'revert' &&
      this.state.preChooseRange[1] &&
      def.valueOf() === this.state.preChooseRange[1].valueOf()
    ) {
      def = this.state.preTimePickerTimes[1]!
    }
    const defaultTime = chooseType === 'revert' ? defaultRevertTime : defaultRentTime
    return (
      <Popup
        visible={this.state.timePickerVisible}
        noPadding={true}
        className="at-calendar__time-picker"
        onMaskClick={this.timePickerCancel}
        height="4.9rem"
      >
        <header className="header">
          <a className="cancel" onClick={this.timePickerCancel}>
            取消
          </a>
          <h2>请选择{this.state.chooseType === 'rent' ? '取' : '还'}车时间</h2>
          <a onClick={this.timePickerNext}>下一步</a>
        </header>
        <TimePicker
          data={[this.state.timePickerData]}
          tips={this.state.timePickerTips}
          format={['MM月dd日 周wk', 'h点', 'm分']}
          interval={15}
          defaultDay={def}
          defaultTime={defaultTime}
          onChange={this.onTimeChange}
          ref={this.timePickerRef}
        />
      </Popup>
    )
  }
}

export default AtCalendar
