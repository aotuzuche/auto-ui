import './style'
import Spin from '../spin'

class Loading {
  static show(tips, timeout = 0) {
    this.hide(false)

    let loading = document.createElement('div')
    loading.classList.add('x-loading')
    loading.id = 'j-x-loading'

    if (tips) {
      loading.innerHTML = `<div class="x-loading__inner">${Spin.toString()}<p>${tips.toString()}</p></div>`
    }
    else {
      loading.innerHTML = `<div class="x-loading__inner">${Spin.toString()}</div>`
    }

    document.body.appendChild(loading)

    setTimeout(() => {
      loading.classList.add('x-loading--show')
    })

    if (timeout !== 0) {
      if (timeout < 500) {
        timeout = 500
      }
      this.__timer = setTimeout(this.hide, timeout)
    }

    const focusdom = document.querySelector(':focus')
    if (focusdom) {
      focusdom.blur()
    }
  }

  static hide() {
    let loading = document.getElementById('j-x-loading')
    if (loading) {
      clearTimeout(this.__timer)
      document.body.removeChild(loading)
    }
  }
}

export default Loading
