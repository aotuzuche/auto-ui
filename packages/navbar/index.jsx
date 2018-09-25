import './style.scss'
import React from 'react'
import cn from 'classnames'
import Toast from '../toast'

class NavBar extends React.Component {
  leftClick = () => {
    window.history.go(-1)
  }

  rightClick = () => {
    Toast.show('点击了功能按钮')
  }

  render() {
    const {
      title,
      className,
      leftBtn,
      rightBtn,
      leftClick,
      rightClick
    } = this.props
    const composeClass = cn('auto-ui_navbar', className)
    return (
      <div className={composeClass}>
        {leftBtn && (
          <div
            className="auto-ui_navbar-leftbtn"
            onClick={leftClick || this.leftClick}
          >
            <i className="auto-ui_navbar-icon auto-ui_navbar-leftbtn-icon" />
          </div>
        )}
        <div className="auto-ui_navbar-title">{title}</div>
        {rightBtn && (
          <div
            className="auto-ui_navbar-rightbtn"
            onClick={rightClick || this.rightClick}
          >
            <i className="auto-ui_navbar-icon auto-ui_navbar-rightbtn-icon" />
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
