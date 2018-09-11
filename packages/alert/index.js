import './style'

class Alert {
  static show(args = {}) {
    const {
      title = '',
      desc = 'empty',
      className = 'x-alert',
      btnTextN,
      btnText = '确定',
      btnTextY = btnText,
      callbackN = () => {
      },
      callback = () => {
      },
      callbackY = callback,
    } = args

    let o = {
      title,
      desc,
      className,
      btnTextN,
      btnTextY,
      callbackN,
      callbackY,
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

  static hide(callback = () => {
  }, val) {
    let alert = document.getElementById('j-x-alert')
    if (alert) {
      alert.classList.remove('x-alert--show')
      alert.classList.add('x-alert--hide')
      this.timeout = setTimeout(() => {
        this.destroy(alert)
        callback(val)
      }, 200)
    }
  }

  static clickN() {
    Alert.hide(Alert.callbackN)
  }

  static clickY() {
    let inputVal = document.getElementById('j-x-alert-input')
    inputVal = inputVal ? inputVal.value : ''
    Alert.hide(Alert.callbackY, inputVal)
  }

  static render(o) {

    this.callbackY = o.callbackY
    this.callbackN = o.callbackN

    let htmlBtnN = o.btnTextN ? `<a href='javascript:;' class='x-alert__btn-n' id='j-x-alert-btn-n'>${o.btnTextN}</a>` : ''

    const title = o.title !== '' ? `<h1>${o.title}</h1>` : ''
    const textcss = title ? '' : 'no-title'

    let html = `
      <div class='x-alert__inner'>
        <div class='x-alert__body'>
          ${title}
          <p class='${textcss}'>${o.desc}</p>
        </div>
        <div class='x-alert__btns'>
          ${htmlBtnN}
          <a href='javascript:;' class='x-alert__btn-y' id='j-x-alert-btn-y'>${o.btnTextY}</a>
        </div>
      </div>
    `

    let alert = document.createElement('div')
    alert.classList.add('x-alert', o.className)
    alert.id = 'j-x-alert'
    alert.innerHTML = html

    document.body.appendChild(alert)

    let btnN = document.getElementById('j-x-alert-btn-n')
    let btnY = document.getElementById('j-x-alert-btn-y')

    btnN && btnN.addEventListener('click', this.clickN)
    btnY && btnY.addEventListener('click', this.clickY)

    setTimeout(() => {
      alert.classList.add('x-alert--show')
    })

    const focusdom = document.querySelector(':focus')
    if (focusdom) {
      focusdom.blur()
    }
  }

  static destroy(alert) {
    let btnN = document.getElementById('j-x-alert-btn-n')
    let btnY = document.getElementById('j-x-alert-btn-y')

    btnN && btnN.removeEventListener('click', this.clickN)
    btnY && btnY.removeEventListener('click', this.clickY)

    this.callbackY = null
    this.callbackN = null

    try {
      document.body.removeChild(alert)
    }
    catch (e) {
    }

  }

  static onHashChange() {
    Alert.hide()
    clearTimeout(this.timeout)
    window.removeEventListener('hashchange', this.onHashChange)
  }
}

const AwaitAlert = props => {
  return new Promise(resolve => {
    const fns = {
      callbackY: () => {
        resolve(true)
      },
      callback: () => {
        resolve(true)
      }
    }
    if (props.callbackN) {
      fns.callbackN = () => {
        resolve(false)
      }
    }
    Alert.show({
      ...props,
      ...fns
    })
  })
}

Alert.await = AwaitAlert

export default Alert
