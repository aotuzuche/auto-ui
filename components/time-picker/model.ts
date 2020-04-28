import dateFormat from './dateFormat'

export interface Times {
  HHList: string[]
  MMList: {
    [HH: string]: string[]
  }
  // MMList -> ['00', '01', ...] 该数组内的值与MMList的key对应
  // MMList -> { '00': ['00', '15', '30', '45'], '01': [...] }
}

// 时间范围，可以是['0000', '1200']，也可以是[['0000', '0700'], ['0900', '1100']]
export interface TimeData {
  day: Date
  times?: string[] | string[][]
}

interface TimeState {
  times: Times // 某一天的时间数据，包括了小时与分钟
  HHList: string[] // 小时的列表
  MMList: string[] // 分钟的列表
  currentDayIndex: number // 天的索引值
  currentDayValue: Date // 天的值
  currentHHIndex: number // 小时的索引值
  currentHHValue: string // 小时的值
  currentMMIndex: number // 分钟的索引值
  currentMMValue: string // 分钟的值
}

// 时分秒的format
type DateFormat = [string, string, string]

class Model {
  HHList: string[]
  MMList: string[]

  constructor() {
    this.HHList = []
    this.MMList = []
  }

  // 获取时间列表，并format格式
  getDayList: (data: TimeData[], format: DateFormat) => string[] = (
    data,
    format = ['MM月dd日 周wk', 'h点', 'm分'],
  ) => {
    const days: string[] = []
    const dayFormat: string = format[0]
    if (Array.isArray(data)) {
      data.forEach(res => {
        if (res.day && res.day instanceof Date) {
          days.push(dateFormat(res.day, dayFormat))
        }
      })
    }
    return days
  }

  // 根据时间转换出state需要的数据
  getStateByTime = (time: Date, data: TimeData[], defaultTime?: string): TimeState => {
    let defDay: Date
    let defHH: string
    let defMM: string

    const hm: string[] = dateFormat(time, 'yyyy,MM,dd,hh,mm').split(',')
    defDay = new Date(Number(hm[0]), Number(hm[1]) - 1, Number(hm[2]))
    defHH = hm[3]
    defMM = hm[4]

    // 是否命中当天（就是datas数据有没有和t是在同一天的，如果没有，小时和分钟就全取默认第一项）
    let hasMatchDay = false

    // 天
    let currentDayIndex = 0
    let currentDayValue = data[0].day

    if (defDay) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].day.valueOf() === defDay.valueOf()) {
          currentDayIndex = i
          currentDayValue = data[i].day
          hasMatchDay = true
          break
        }
      }
    }

    const [dfHour, dfMinu] = (defaultTime || '').split(':')
    // 小时
    const timeList = this.getTimeList(data[currentDayIndex])
    const times = this.transTimeList(timeList)
    let currentHHIndex = 0
    let currentHHValue = times.HHList[0]
    let hasMatchDfHour = false
    if (dfHour) {
      const index = times.HHList.findIndex(hhItem => hhItem === dfHour)
      if (index >= 0) {
        currentHHIndex = index
        currentHHValue = dfHour
        hasMatchDfHour = true
      }
    }
    if (!hasMatchDfHour && hasMatchDay && defHH) {
      times.HHList.forEach((i, index) => {
        if (i !== 'HHList' && i === defHH) {
          currentHHIndex = index
          currentHHValue = i
        }
      })
    }

    // 分钟
    let currentMMIndex = 0
    const mmList = times.MMList[times.HHList[currentHHIndex]]
    let currentMMValue = mmList ? mmList[0] : '00'

    let hasMatchDfMinu = false
    if (dfMinu) {
      const index = mmList.findIndex(mmItem => mmItem === dfMinu)
      if (index >= 0) {
        currentMMIndex = index
        currentMMValue = dfMinu
        hasMatchDfMinu = true
      }
    }
    if (!hasMatchDfMinu && hasMatchDay && defMM) {
      for (let i = 0; i < times.MMList[times.HHList[currentHHIndex]].length; i++) {
        const d = times.MMList[times.HHList[currentHHIndex]][i]
        if (d === defMM) {
          currentMMIndex = i
          currentMMValue = d
          break
        }
      }
    }

    const res: TimeState = {
      times, // 时间数据，包括了小时与分钟
      currentDayIndex, // 天的索引值
      currentDayValue, // 天的值
      currentHHIndex, // 小时的索引值
      currentHHValue, // 小时的值
      currentMMIndex, // 分钟的索引值
      currentMMValue, // 分钟的值
      HHList: times.HHList, // 小时的列表
      MMList: times.MMList[times.HHList[currentHHIndex]], // 分钟的列表
    }
    return res
  }

  // 将时间和分钟分为两组数据，接收的数据格式为getTimeList方法返回的格式
  transTimeList: (times: string[]) => Times = times => {
    const result: Times = {
      HHList: [],
      MMList: {},
    }
    if (Array.isArray(times)) {
      times.forEach(item => {
        const i = item.substr(0, 2)
        const t = item.substr(2, 2)
        if (!result.MMList[i]) {
          result.MMList[i] = [t]
          result.HHList.push(i)
        } else {
          result.MMList[i].push(t)
        }
      })
    }
    return result
  }

  // 根据两个范围获取可用的时间
  // eg: getTimeRange(0215, 1200) 表示2:15至12点间的可用时间
  getTimeRange: (start: string, end: string) => string[] = (start, end) => {
    // 判断格式是否正确
    if (!/[0-9]{4}/.test(start) || !/[0-9]{4}/.test(end)) {
      return []
    }
    // end要比start大
    if (Number(end) - Number(start) < 0) {
      return []
    }
    // start和end一样
    if (start === end) {
      return [start]
    }

    // 获取判断的小时范围
    const hhStart = Math.min(Number(start.substr(0, 2)) - 0, this.HHList.length - 1)
    const hhEnd = Math.min(Number(end.substr(0, 2)) - 0, this.HHList.length - 1)
    const range = []

    // 判断所有的时间并把在这个范围内的时间取出来
    for (let i = hhStart; i <= hhEnd; i++) {
      for (const m of this.MMList) {
        const t = this.HHList[i] + m
        if (i === hhStart || i === hhEnd) {
          if (t >= start && t <= end) {
            range.push(t)
          }
        } else {
          range.push(t)
        }
      }
    }
    return range
  }

  // 判断是否为整点时间
  isZeroTime(date: Date) {
    return date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() === 0
  }

  // 获取时间列表
  getTimeList: (day: TimeData) => string[] = day => {
    let times: string[] = []
    if (!day) {
      return times
    }
    if (!Array.isArray(day.times)) {
      for (const h of this.HHList) {
        for (const m of this.MMList) {
          times.push(h + m)
        }
      }
      return times
    }
    if (day.times && day.times.length && Array.isArray(day.times[0])) {
      ;(day.times as string[][]).forEach(res => {
        if (Array.isArray(res) && res.length === 2) {
          const t = this.getTimeRange(res[0], res[1])
          if (t) {
            t.forEach(i => {
              if (times.indexOf(i) === -1) {
                times.push(i)
              }
            })
          }
        }
      })
    } else if (
      day.times &&
      day.times.length === 2 &&
      typeof day.times[0] === 'string' &&
      typeof day.times[1] === 'string'
    ) {
      times = this.getTimeRange(day.times[0] as string, day.times[1] as string)
    }
    return times.sort((a, b) => Number(a) - Number(b))
  }
}

export default new Model()
