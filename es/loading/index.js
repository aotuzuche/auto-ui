import './style'
import Spin from '../spin'

let Loading =
/* #__PURE__ */
(function () {
  function Loading() {}

  Loading.show = function show(tips, timeout) {
    if (timeout === void 0) {
      timeout = 0
    }

    this.hide(false)
    let loading = document.createElement('div')
    loading.classList.add('x-loading')
    loading.id = 'j-x-loading'

    if (tips) {
      loading.innerHTML = '<div class="x-loading__inner">' + Spin.toString() + '<p>' + tips.toString() + '</p></div>'
    } else {
      loading.innerHTML = '<div class="x-loading__inner">' + Spin.toString() + '</div>'
    }

    document.body.appendChild(loading)
    setTimeout(function () {
      loading.classList.add('x-loading--show')
    })

    if (timeout !== 0) {
      if (timeout < 500) {
        timeout = 500
      }

      this.__timer = setTimeout(this.hide, timeout)
    }

    let focusdom = document.querySelector(':focus')

    if (focusdom) {
      focusdom.blur()
    }
  }

  Loading.hide = function hide() {
    let loading = document.getElementById('j-x-loading')

    if (loading) {
      clearTimeout(this.__timer)
      document.body.removeChild(loading)
    }
  }

  return Loading
})()

export default Loading