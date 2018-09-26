import _extends from '@babel/runtime/helpers/esm/extends'
import './style'

let Alert =
/* #__PURE__ */
(function () {
  function Alert() {}

  Alert.show = function show(args) {
    if (args === void 0) {
      args = {}
    }

    let _args = args


    let _args$title = _args.title


    let title = _args$title === void 0 ? '' : _args$title


    let _args$desc = _args.desc


    let desc = _args$desc === void 0 ? 'empty' : _args$desc


    let _args$className = _args.className


    let className = _args$className === void 0 ? 'x-alert' : _args$className


    let btnTextN = _args.btnTextN


    let _args$btnText = _args.btnText


    let btnText = _args$btnText === void 0 ? '确定' : _args$btnText


    let _args$btnTextY = _args.btnTextY


    let btnTextY = _args$btnTextY === void 0 ? btnText : _args$btnTextY


    let _args$callbackN = _args.callbackN


    let callbackN = _args$callbackN === void 0 ? function () {} : _args$callbackN


    let _args$callback = _args.callback


    let callback = _args$callback === void 0 ? function () {} : _args$callback


    let _args$callbackY = _args.callbackY


    let callbackY = _args$callbackY === void 0 ? callback : _args$callbackY
    let o = {
      title: title,
      desc: desc,
      className: className,
      btnTextN: btnTextN,
      btnTextY: btnTextY,
      callbackN: callbackN,
      callbackY: callbackY
    }

    if (typeof arguments[0] === 'string') {
      o.desc = arguments[0]
    }

    let alert = document.getElementById('j-x-alert')

    if (alert) {
      return
    }

    this.render(o)
    window.addEventListener('hashchange', this.onHashChange)
  }

  Alert.hide = function hide(callback, val) {
    let _this = this

    if (callback === void 0) {
      callback = function callback() {}
    }

    let alert = document.getElementById('j-x-alert')

    if (alert) {
      alert.classList.remove('x-alert--show')
      alert.classList.add('x-alert--hide')
      this.timeout = setTimeout(function () {
        _this.destroy(alert)

        callback(val)
      }, 200)
    }
  }

  Alert.clickN = function clickN() {
    Alert.hide(Alert.callbackN)
  }

  Alert.clickY = function clickY() {
    let inputVal = document.getElementById('j-x-alert-input')
    inputVal = inputVal ? inputVal.value : ''
    Alert.hide(Alert.callbackY, inputVal)
  }

  Alert.render = function render(o) {
    this.callbackY = o.callbackY
    this.callbackN = o.callbackN
    let htmlBtnN = o.btnTextN ? "<a href='javascript:;' class='x-alert__btn-n' id='j-x-alert-btn-n'>" + o.btnTextN + '</a>' : ''
    let title = o.title !== '' ? '<h1>' + o.title + '</h1>' : ''
    let textcss = title ? '' : 'no-title'
    let html = "\n      <div class='x-alert__inner'>\n        <div class='x-alert__body'>\n          " + title + "\n          <p class='" + textcss + "'>" + o.desc + "</p>\n        </div>\n        <div class='x-alert__btns'>\n          " + htmlBtnN + "\n          <a href='javascript:;' class='x-alert__btn-y' id='j-x-alert-btn-y'>" + o.btnTextY + '</a>\n        </div>\n      </div>\n    '
    let alert = document.createElement('div')
    alert.classList.add('x-alert', o.className)
    alert.id = 'j-x-alert'
    alert.innerHTML = html
    document.body.appendChild(alert)
    let btnN = document.getElementById('j-x-alert-btn-n')
    let btnY = document.getElementById('j-x-alert-btn-y')
    btnN && btnN.addEventListener('click', this.clickN)
    btnY && btnY.addEventListener('click', this.clickY)
    setTimeout(function () {
      alert.classList.add('x-alert--show')
    })
    let focusdom = document.querySelector(':focus')

    if (focusdom) {
      focusdom.blur()
    }
  }

  Alert.destroy = function destroy(alert) {
    let btnN = document.getElementById('j-x-alert-btn-n')
    let btnY = document.getElementById('j-x-alert-btn-y')
    btnN && btnN.removeEventListener('click', this.clickN)
    btnY && btnY.removeEventListener('click', this.clickY)
    this.callbackY = null
    this.callbackN = null

    try {
      document.body.removeChild(alert)
    } catch (e) {}
  }

  Alert.onHashChange = function onHashChange() {
    Alert.hide()
    clearTimeout(this.timeout)
    window.removeEventListener('hashchange', this.onHashChange)
  }

  return Alert
})()

let AwaitAlert = function AwaitAlert(props) {
  return new Promise(function (resolve) {
    let fns = {
      callbackY: function callbackY() {
        resolve(true)
      },
      callback: function callback() {
        resolve(true)
      }
    }

    if (props.callbackN) {
      fns.callbackN = function () {
        resolve(false)
      }
    }

    Alert.show(_extends({}, props, fns))
  })
}

Alert.await = AwaitAlert
export default Alert