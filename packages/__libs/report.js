function report(data, url) {
  if (!data) {
    return
  }
  if (!url) {
    url = 'https://hm.baidu.com/hm.gif?date=' + (new Date() - 0)
  }
  // @see http://jsperf.com/new-image-vs-createelement-img
  let image = document.createElement('img')
  const items = []
  for (let key in data) {
    if (typeof data[key] !== 'undefined') {
      items.push(key + '=' + encodeURIComponent(data[key]))
    }
  }
  image.onload = image.onerror = function () {
    image = image.onload = image.onerror = null
  }
  image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&')
}

export default report