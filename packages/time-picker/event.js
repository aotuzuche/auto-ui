"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:prefer-for-of */
var Event = /** @class */ (function () {
    function Event() {
        var _this = this;
        // 获取时间列表
        this.getTimeList = function (day) {
            var times = [];
            if (!day) {
                return times;
            }
            else if (!Array.isArray(day.times)) {
                for (var i = 0; i < _this.HH.length; i++) {
                    for (var j = 0; j < _this.MM.length; j++) {
                        times.push(_this.HH[i] + _this.MM[j]);
                    }
                }
                return times;
            }
            if (day.times && day.times.length && Array.isArray(day.times[0])) {
                day.times.forEach(function (res) {
                    if (Array.isArray(res) && res.length === 2) {
                        var t = _this.getTimeRange.apply(_this, __spread(res));
                        if (t) {
                            t.forEach(function (i) {
                                if (times.indexOf(i) === -1) {
                                    times.push(i);
                                }
                            });
                        }
                    }
                });
            }
            else if (day.times &&
                day.times.length === 2 &&
                typeof day.times[0] === 'string' &&
                typeof day.times[1] === 'string') {
                times = _this.getTimeRange(day.times[0], day.times[1]);
            }
            return times.sort(function (a, b) { return a - b; });
        };
    }
    // 获取时间列表，并format格式
    Event.prototype.getDayList = function (o, format) {
        if (format === void 0) { format = ['MM月dd日 周wk', 'h点', 'm分']; }
        var days = [];
        var dayFormat = format[0];
        if (Array.isArray(o)) {
            o.forEach(function (res) {
                if (res.day && res.day instanceof Date) {
                    days.push(res.day.formatWithWk(dayFormat));
                }
            });
        }
        return days;
    };
    // 根据时间转换出state需要的数据
    Event.prototype.getStateByTime = function (t, data) {
        var defDay;
        var defHH;
        var defMM;
        if (t) {
            var hm = t.formatWithWk('yyyy,MM,dd,hh,mm').split(',');
            defDay = new Date(hm[0] - 0, hm[1] - 1, hm[2] - 0);
            defHH = hm[3];
            defMM = hm[4];
        }
        // 是否命中当天（就是datas数据有没有和t是在同一天的，如果没有，小时和分钟就全取默认第一项）
        var hasMatchDay = false;
        // 天
        var dayIndex = 0;
        var dayValue = data[0].day;
        if (defDay) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].day - 0 === defDay - 0) {
                    dayIndex = i;
                    dayValue = data[i].day;
                    hasMatchDay = true;
                    break;
                }
            }
        }
        // 小时
        var times = this.transTimeList(this.getTimeList(data[dayIndex]));
        var HHIndex = 0;
        var HHValue = times.HH[0];
        if (hasMatchDay && defHH) {
            times.HH.forEach(function (i, index) {
                if (i !== 'HH' && i === defHH) {
                    HHIndex = index;
                    HHValue = i;
                }
            });
        }
        // 分钟
        var MMIndex = 0;
        var MMValue = times[times.HH[HHIndex]][0];
        if (hasMatchDay && defMM) {
            for (var i = 0; i < times[times.HH[HHIndex]].length; i++) {
                var d = times[times.HH[HHIndex]][i];
                if (d === defMM) {
                    MMIndex = i;
                    MMValue = d;
                    break;
                }
            }
        }
        return {
            times: times,
            HH: times.HH,
            MM: times[times.HH[HHIndex]],
            dayIndex: dayIndex,
            dayValue: dayValue,
            HHIndex: HHIndex,
            HHValue: HHValue,
            MMIndex: MMIndex,
            MMValue: MMValue // 分钟的值
        };
    };
    // 将时间和分钟分为两组数据，接收的数据格式为getTimeList方法返回的格式
    Event.prototype.transTimeList = function (times) {
        var trans = {
            HH: []
        };
        if (Array.isArray(times)) {
            times.forEach(function (item) {
                var i = item.substr(0, 2);
                var t = item.substr(2, 2);
                if (!trans[i]) {
                    trans[i] = [t];
                    trans.HH.push(i);
                }
                else {
                    trans[i].push(t);
                }
            });
        }
        return trans;
    };
    // 根据两个范围获取可用的时间
    Event.prototype.getTimeRange = function (start, end) {
        // 判断格式是否正确
        if (!/[0-9]{4}/.test(start) || !/[0-9]{4}/.test(end)) {
            return null;
        }
        // end要比start大
        if (end - start <= 0) {
            return null;
        }
        // 获取判断的小时范围
        var ii = Math.min(start.substr(0, 2) - 0, this.HH.length - 1);
        var jj = Math.min(end.substr(0, 2) - 0, this.HH.length - 1);
        var range = [];
        // 判断所有的时间并把在这个范围内的时间取出来
        for (var i = ii; i <= jj; i++) {
            for (var j = 0; j < this.MM.length; j++) {
                var t = this.HH[i] + this.MM[j];
                if (i === ii || i === jj) {
                    if (t >= start && t <= end) {
                        range.push(t);
                    }
                }
                else {
                    range.push(t);
                }
            }
        }
        return range;
    };
    return Event;
}());
exports.default = new Event();
