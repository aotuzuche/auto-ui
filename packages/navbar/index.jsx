import './style.scss'
import React from 'react'
import cn from 'classnames'

class NavBar extends React.Component {
  leftClick = e => {
    window.history.go(-1)
  }

  rightClick = e => {
    window.location.href = window.location.origin + '/m/index'
  }

  render() {
    const {
      title,
      className,
      leftBtn,
      rightBtn,
      leftClick,
      rightClick,
      dark,
      transparent,
      ...otherProps
    } = this.props
    const composeClass = cn(
      'auto-ui_navbar',
      {
        'auto-ui_navbar-dark': dark,
        'auto-ui_navbar-transparent': transparent
      },
      className
    )
    return (
      <div {...otherProps} className={composeClass}>
        {leftBtn && (
          <div
            className="auto-ui_navbar-leftbtn"
            onClick={leftClick || this.leftClick}
          >
            {leftBtn === true ? (
              <i className="auto-ui_navbar-icon auto-ui_navbar-leftbtn-icon" />
            ) : (
              leftBtn
            )}
          </div>
        )}
        <div className="auto-ui_navbar-title">{title}</div>
        {rightBtn && (
          <div
            className="auto-ui_navbar-rightbtn"
            onClick={rightClick || this.rightClick}
          >
            {rightBtn === true ? (
              <i className="auto-ui_navbar-icon auto-ui_navbar-rightbtn-icon" />
            ) : (
              rightBtn
            )}
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
