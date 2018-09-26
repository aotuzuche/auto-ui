import _defineProperty from '@babel/runtime/helpers/esm/defineProperty'

let Event =
/* #__PURE__ */
(function () {
  function Event() {
    let _this = this

    _defineProperty(this, 'getTimeList', function (day) {
      let times = []

      if (!day) {
        return times
      } else if (!Array.isArray(day.times)) {
        for (let i = 0; i < _this.HH.length; i++) {
          for (let j = 0; j < _this.MM.length; j++) {
            times.push(_this.HH[i] + _this.MM[j])
          }
        }

        return times
      }

      if (day.times && day.times.length && Array.isArray(day.times[0])) {
        day.times.forEach(function (res) {
          if (Array.isArray(res) && res.length === 2) {
            let t = _this.getTimeRange.apply(_this, res)

            if (t) {
              t.forEach(function (i) {
                if (times.indexOf(i) === -1) {
                  times.push(i)
                }
              })
            }
          }
        })
      } else if (day.times && day.times.length === 2 && typeof day.times[0] === 'string' && typeof day.times[1] === 'string') {
        times = _this.getTimeRange(day.times[0], day.times[1])
      }

      return times.sort(function (a, b) {
        return a - b
      })
    })
  }

  let _proto = Event.prototype

  // 获取时间列表，并format格式
  _proto.getDayList = function getDayList(o, format) {
    if (format === void 0) {
      format = ['MM月dd日 周wk', 'h点', 'm分']
    }

    let days = []
    let dayFormat = format[0]

    if (Array.isArray(o)) {
      o.forEach(function (res) {
        if (res.day && res.day instanceof Date) {
          days.push(res.day.formatWithWk(dayFormat))
        }
      })
    }

    return days
  } // 根据时间转换出state需要的数据


  _proto.getStateByTime = function getStateByTime(t, data) {
    let defDay
    let defHH
    let defMM

    if (t) {
      let hm = t.formatWithWk('yyyy,MM,dd,hh,mm').split(',')
      defDay = new Date(hm[0] - 0, hm[1] - 1, hm[2] - 0)
      defHH = hm[3]
      defMM = hm[4]
    } // 是否命中当天（就是datas数据有没有和t是在同一天的，如果没有，小时和分钟就全取默认第一项）


    let hasMatchDay = false // 天

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
    } // 小时


    let times = this.transTimeList(this.getTimeList(data[dayIndex]))
    let HHIndex = 0
    let HHValue = times.HH[0]

    if (hasMatchDay && defHH) {
      times.HH.forEach(function (i, index) {
        if (i !== 'HH' && i === defHH) {
          HHIndex = index
          HHValue = i
        }
      })
    } // 分钟


    let MMIndex = 0
    let MMValue = times[times.HH[HHIndex]][0]

    if (hasMatchDay && defMM) {
      for (let _i = 0; _i < times[times.HH[HHIndex]].length; _i++) {
        let d = times[times.HH[HHIndex]][_i]

        if (d === defMM) {
          MMIndex = _i
          MMValue = d
          break
        }
      }
    }

    return {
      times: times,
      // 时间数据，包括了小时与分钟
      HH: times.HH,
      // 小时的列表
      MM: times[times.HH[HHIndex]],
      // 分钟的列表
      dayIndex: dayIndex,
      // 天的索引值
      dayValue: dayValue,
      // 天的值
      HHIndex: HHIndex,
      // 小时的索引值
      HHValue: HHValue,
      // 小时的值
      MMIndex: MMIndex,
      // 分钟的索引值
      MMValue: MMValue // 分钟的值

    }
  } // 将时间和分钟分为两组数据，接收的数据格式为getTimeList方法返回的格式


  _proto.transTimeList = function transTimeList(times) {
    let trans = {
      HH: []
    }

    if (Array.isArray(times)) {
      times.forEach(function (item) {
        let i = item.substr(0, 2)
        let t = item.substr(2, 2)

        if (!trans[i]) {
          trans[i] = [t]
          trans.HH.push(i)
        } else {
          trans[i].push(t)
        }
      })
    }

    return trans
  } // 根据两个范围获取可用的时间


  _proto.getTimeRange = function getTimeRange(start, end) {
    // 判断格式是否正确
    if (!/[0-9]{4}/.test(start) || !/[0-9]{4}/.test(end)) {
      return null
    } // end要比start大


    if (end - start <= 0) {
      return null
    } // 获取判断的小时范围


    let ii = Math.min(start.substr(0, 2) - 0, this.HH.length - 1)
    let jj = Math.min(end.substr(0, 2) - 0, this.HH.length - 1)
    let range = [] // 判断所有的时间并把在这个范围内的时间取出来

    for (let i = ii; i <= jj; i++) {
      for (let j = 0; j < this.MM.length; j++) {
        let t = this.HH[i] + this.MM[j]

        if (i === ii || i === jj) {
          if (t >= start && t <= end) {
            range.push(t)
          }
        } else {
          range.push(t)
        }
      }
    }

    return range
  } // 获取时间列表


  return Event
})()

export default new Event()