class Event {
  // 获取时间列表，并format格式
  getDayList(o, format = ['MM月dd日 周wk', 'h点', 'm分']) {
    const days = []
    const dayFormat = format[0]
    if (Array.isArray(o)) {
      o.forEach(res => {
        if (res.day && res.day instanceof Date) {
          days.push(res.day.formatWithWk(dayFormat))
        }
      })
    }
    return days
  }

  // 根据时间转换出state需要的数据
  getStateByTime(t, data) {
    let defDay
    let defHH
    let defMM

    if (t) {
      const hm = t.formatWithWk('yyyy,MM,dd,hh,mm').split(',')
      defDay = new Date(hm[0] - 0, hm[1] - 1, hm[2] - 0)
      defHH = hm[3]
      defMM = hm[4]
    }

    // 是否命中当天（就是datas数据有没有和t是在同一天的，如果没有，小时和分钟就全取默认第一项）
    let hasMatchDay = false

    // 天
    let dayIndex = 0
    let dayValue = data[0].day

    if (defDay) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].day - 0 === defDay - 0) {
          dayIndex = i
          dayValue = data[i].day
          hasMatchDay = true
          break
        }
      }
    }

    // 小时
    const times = this.transTimeList(this.getTimeList(data[dayIndex]))
    let HHIndex = 0
    let HHValue = times.HH[0]
    if (hasMatchDay && defHH) {
      times.HH.forEach((i, index) => {
        if (i !== 'HH' && i === defHH) {
          HHIndex = index
          HHValue = i
        }
      })
    }

    // 分钟
    let MMIndex = 0
    let MMValue = times[times.HH[HHIndex]][0]
    if (hasMatchDay && defMM) {
      for (let i = 0; i < times[times.HH[HHIndex]].length; i++) {
        const d = times[times.HH[HHIndex]][i]
        if (d === defMM) {
          MMIndex = i
          MMValue = d
          break
        }
      }
    }

    return {
      times, // 时间数据，包括了小时与分钟
      HH: times.HH, // 小时的列表
      MM: times[times.HH[HHIndex]], // 分钟的列表
      dayIndex, // 天的索引值
      dayValue, // 天的值
      HHIndex, // 小时的索引值
      HHValue, // 小时的值
      MMIndex, // 分钟的索引值
      MMValue, // 分钟的值
    }
  }

  // 将时间和分钟分为两组数据，接收的数据格式为getTimeList方法返回的格式
  transTimeList(times) {
    const trans = {
      HH: []
    }
    if (Array.isArray(times)) {
      times.forEach(item => {
        const i = item.substr(0, 2)
        const t = item.substr(2, 2)
        if (!trans[i]) {
          trans[i] = [t]
          trans.HH.push(i)
        }
        else {
          trans[i].push(t)
        }
      })
    }
    return trans
  }

  // 根据两个范围获取可用的时间
  getTimeRange(start, end) {
    // 判断格式是否正确
    if (!(/[0-9]{4}/).test(start) || !(/[0-9]{4}/).test(end)) {
      return null
    }
    // end要比start大
    if (end - start <= 0) {
      return null
    }

    // 获取判断的小时范围
    const ii = Math.min(start.substr(0, 2) - 0, this.HH.length - 1)
    const jj = Math.min(end.substr(0, 2) - 0, this.HH.length - 1)

    const range = []

    // 判断所有的时间并把在这个范围内的时间取出来
    for (let i = ii; i <= jj; i++) {
      for (let j = 0; j < this.MM.length; j++) {
        const t = this.HH[i] + this.MM[j]
        if (i === ii || i === jj) {
          if (t >= start && t <= end) {
            range.push(t)
          }
        }
        else {
          range.push(t)
        }
      }
    }
    return range
  }

  // 获取时间列表
  getTimeList = day => {
    let times = []
    if (!day) {
      return times
    }
    else if (!Array.isArray(day.times)) {
      for (let i = 0; i < this.HH.length; i++) {
        for (let j = 0; j < this.MM.length; j++) {
          times.push(this.HH[i] + this.MM[j])
        }
      }
      return times
    }
    if (day.times &&
      day.times.length &&
      Array.isArray(day.times[0])) {
      day.times.forEach(res => {
        if (Array.isArray(res) && res.length === 2) {
          const t = this.getTimeRange(...res)
          if (t) {
            t.forEach(i => {
              if (times.indexOf(i) === -1) {
                times.push(i)
              }
            })
          }
        }
      })
    }
    else if (day.times &&
      day.times.length === 2 &&
      typeof day.times[0] === 'string' &&
      typeof day.times[1] === 'string') {
      times = this.getTimeRange(day.times[0], day.times[1])
    }
    return times.sort((a, b) => a - b)
  }
}

export default new Event()