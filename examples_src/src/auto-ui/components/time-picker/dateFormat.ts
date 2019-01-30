const dateFormat: (date: Date, fmt: string) => string = (date, fmt) => {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  let format = fmt;
  if (/(y+)/.test(fmt)) {
    format = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
  }
  if (/(wk)/.test(fmt)) {
    const wks = '日一二三四五六'.split('');
    format = fmt.replace(RegExp.$1, wks[date.getDay()]);
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? (o as any)[k] : `00${(o as any)[k]}`.substr(String((o as any)[k]).length),
      );
    }
  }
  return format;
};

export default dateFormat;
