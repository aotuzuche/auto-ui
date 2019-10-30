// 秒数转为倒计时方式的字符串
const secondToCountdown = (second: number, zh_CN?: boolean, justDayOver24h = true) => {
  const _second = second < 0 ? 0 : second

  const HOUR = 3600
  const H24 = 24
  const S60 = 60

  // 如果超过1天，仅显示天
  if (justDayOver24h) {
    if (Math.floor(_second / (HOUR * H24)) > 0) {
      return `${Math.floor(_second / (HOUR * H24))}天`
    }
  }

  const h = `000${Math.floor(_second / HOUR)}`.substr(-2)
  const m = `000${Math.floor((_second / S60) % S60)}`.substr(-2)
  const s = `000${Math.floor(_second % S60)}`.substr(-2)

  // 如果使用中文
  if (zh_CN) {
    if (h === '00') {
      return `${m}分${s}秒`
    }
    return `${h}时${m}分${s}秒`
  }

  return `${h}:${m}:${s}`
}

const dateFormat: (date: Date, fmt: string) => string = (date, fmt) => {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }
  let format = fmt
  if (/(y+)/.test(fmt)) {
    format = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
  }
  if (/(wk)/.test(fmt)) {
    const wks = '日一二三四五六'.split('')
    format = fmt.replace(RegExp.$1, wks[date.getDay()])
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? (o as any)[k]
          : `00${(o as any)[k]}`.substr(String((o as any)[k]).length),
      )
    }
  }
  return format
}

// 时间差，单位为小时
const offsetHours = (date1: Date, date2: Date): number => {
  const NUM = 3600000
  return Math.ceil((date2.valueOf() - date1.valueOf()) / NUM)
}

// 将时间差转为文字方式
const offsetDays = (date1: Date, date2: Date): string => {
  const DAYHOURS = 24
  const offset = Math.abs(offsetHours(date1, date2))
  if (offset === 0) {
    return ''
  }
  if (offset < DAYHOURS) {
    return `${offset}小时`
  }
  if (offset % DAYHOURS === 0) {
    return `${offset / DAYHOURS}天`
  }
  return `${Math.floor(offset / DAYHOURS)}天 ${offset % DAYHOURS}小时`
}

// 将字符串20190101093000 转换为时间格式
const stringToDate = (val: string): Date => {
  if (!val || !/[0-9]+/.test(val)) {
    throw Error('invalid date')
  }
  const LEN = 14
  let _str = val
  if (_str.length === 4) {
    _str = `${_str}0101` // 如果只有年，把月和日补1，即 2019 => 20190101
  } else if (_str.length === 6) {
    // 如果只有年月，把日补1，即 201901 => 20190101
    _str = `${_str}01`
  }
  _str = `${_str}00000000000000`.substr(0, LEN)

  const v: any[] = _str.replace(/(^\d{4}|\d{2})/gi, res => `${res},`).split(',', 6)
  v[1] = Number(v[1]) - 1
  return new Date(v[0], v[1], v[2], v[3], v[4], v[5])
}

export { offsetHours, offsetDays, stringToDate, dateFormat, secondToCountdown }
