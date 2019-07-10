import cn from 'classnames'
import * as React from 'react'
import { dateFormat, offsetDays } from '../__utils/transfer'
import Button from '../button'
import Layout from '../layout'
import Popup from '../popup'
import TimePicker from '../time-picker'
import Controller from './controller'
import './style.scss'

class AtCalendar extends Controller {
  public render() {
    return (
      <Layout className="at-calendar">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
        {this.renderTimePicker()}
      </Layout>
    );
  }

  // 页头
  private renderHeader() {
    const addonBottom = () => {
      const d1 = this.state.chooseRange[0];
      const d2 = this.state.chooseRange[1];
      const t1 = this.state.timePickerTimes[0];
      const t2 = this.state.timePickerTimes[1];
      return (
        <React.Fragment>
          {!this.props.readonly && (
            <div className="time-range">
              <div className={cn('date', 'from', { active: !!d1 })}>
                <h6>{d1 ? dateFormat(d1, 'M月d日 周wk') : '取车时间'}</h6>
                <p>{t1 ? dateFormat(t1, 'hh:mm') : '请设置'}</p>
              </div>
              <div className={cn('date', 'to', { active: !!d2 })}>
                <h6>{d2 ? dateFormat(d2, 'M月d日 周wk') : '还车时间'}</h6>
                <p>{t2 ? dateFormat(t2, 'hh:mm') : '请设置'}</p>
              </div>
            </div>
          )}
          <ul className="weeks">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
          </ul>
        </React.Fragment>
      );
    };
    return (
      <Layout.Header
        className="header"
        borderType="border"
        onCloseClick={this.props.onClose}
        title={this.props.title}
        addonAfter={
          !this.props.readonly && (
            <a href="javascript:;" className="clear" onClick={this.clearChooseRange}>
              清空
            </a>
          )
        }
        addonBottom={addonBottom()}
      />
    );
  }

  // 主体
  private renderBody() {
    return (
      <Layout.Body className="body" id="x-calendar-body">
        {this.getMonthList().map(month => {
          return this.renderMonth(month);
        })}
      </Layout.Body>
    );
  }

  // 月
  private renderMonth(month: Date) {
    const y = month.getFullYear();
    const m = month.getMonth();
    let w = month.getDay() - 1;
    if (w === -1) {
      w = 6;
    }
    const space = (() => {
      const arr = [];
      for (let i = 0; i < w; i++) {
        arr.push('');
      }
      return arr;
    })();
    const count = new Date(y, m + 1, 0).getDate();
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(new Date(y, m, i + 1));
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
    );
  }

  // 月份的每一天
  private renderMonthDay(date: Date) {
    const key = date.valueOf();
    const data: any = this.props.data && this.props.data[key] ? this.props.data[key] : { disabled: 'DISABLED' };
    let isDisabledBefore = this.props.disabledBefore ? this.props.disabledBefore > date : false;
    if (data.disabled === 'DISABLED') {
      isDisabledBefore = true;
    }
    const readonly = this.props.readonly;
    const wkname = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
    const isBtween = this.isBtweenChooseRange(date);
    const css = cn('month-day', wkname[date.getDay()], {
      active: !readonly && isBtween,
      'active-first': !readonly && this.state.chooseRange[0] && this.state.chooseRange[0].valueOf() === key,
      'active-end': !readonly && this.state.chooseRange[1] && this.state.chooseRange[1].valueOf() === key,
      disabled: isDisabledBefore,
      'is-holiday': data.isHoliday,
      'disabled-all': !isDisabledBefore && data.disabled === 'ALL',
      'disabled-part': !isDisabledBefore && data.disabled === 'PART',
    });
    const onClick = () => {
      if ((isDisabledBefore || readonly || data.disabled) && !isBtween) {
        return;
      }
      this.onDayClick(date, data);
    };
    return (
      <div className={css} key={key} onClick={onClick}>
        <p>
          <em>{date.getDate()}</em>
        </p>
        {data.price && <span>￥{data.price}</span>}
      </div>
    );
  }

  // 页脚
  private renderFooter() {
    const min = this.props.minHours || 0;
    const times = this.state.timePickerTimes;
    const chooseOk = times[0] !== null && times[1] !== null;
    return (
      <Layout.Footer className="footer">
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
            {chooseOk ? (
              <p>
                共计<strong>{offsetDays(times[0]!, times[1]!)}</strong>
              </p>
            ) : (
              <p>
                {min >= 24 ? `${Math.round((min / 24) * 100) / 100}天起租` : min > 0 ? `${min}小时起租` : '请选择租期'}
              </p>
            )}
            <Button className="submit" onClick={this.onSubmit}>
              确定
            </Button>
          </div>
        )}
      </Layout.Footer>
    );
  }

  // 时间选择器
  private renderTimePicker() {
    let def = new Date(2000, 1, 1);
    if (this.state.chooseType === 'rent' && this.state.chooseRange[0]) {
      def = this.state.chooseRange[0];
    } else if (this.state.chooseType === 'revert' && this.state.chooseRange[1]) {
      def = this.state.chooseRange[1];
    }
    if (
      this.state.chooseType === 'rent' &&
      this.state.preChooseRange[0] &&
      def.valueOf() === this.state.preChooseRange[0].valueOf()
    ) {
      def = this.state.preTimePickerTimes[0]!;
    } else if (
      this.state.chooseType === 'revert' &&
      this.state.preChooseRange[1] &&
      def.valueOf() === this.state.preChooseRange[1].valueOf()
    ) {
      def = this.state.preTimePickerTimes[1]!;
    }

    return (
      <Popup
        visible={this.state.timePickerVisible}
        noPadding={true}
        className="at-calendar__time-picker"
        onMaskClick={this.timePickerCancel}
        height="4.9rem">
        <header className="header">
          <a href="javascript:;" className="cancel" onClick={this.timePickerCancel}>
            取消
          </a>
          <h2>请选择{this.state.chooseType === 'rent' ? '取' : '还'}车时间</h2>
          <a href="javascript:;" onClick={this.timePickerNext}>
            下一步
          </a>
        </header>
        <TimePicker
          data={[this.state.timePickerData]}
          tips={this.state.timePickerTips}
          format={['MM月dd日 周wk', 'h点', 'm分']}
          interval={15}
          defaultDay={def}
          onChange={this.onTimeChange}
          ref={this.timePickerRef}
        />
      </Popup>
    );
  }
}

export default AtCalendar;
