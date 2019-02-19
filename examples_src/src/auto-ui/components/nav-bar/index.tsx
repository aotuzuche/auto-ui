import cn from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';
import IconClose from '../icon/close'
import IconBack from '../icon/back_s'
import './style.scss';

export interface NavBarProps {
  title?: ReactNode;
  className?: string;
  mode?: 'normal' | 'large';
  addonBottom?:ReactNode;
  leftBtn?: ReactNode;
  rightBtn?: ReactNode;
  leftClick?: MouseEventHandler<HTMLDivElement>;
  rightClick?: MouseEventHandler<HTMLDivElement>;
  dark?: boolean;
  transparent?: boolean;
  [otherProps: string]: any;
}

export default class NavBar extends React.Component<NavBarProps, any> {
  public leftClick: MouseEventHandler<HTMLDivElement> = e => {
    window.history.go(-1);
  }

  public rightClick: MouseEventHandler<HTMLDivElement> = e => {
    window.location.href = `${window.location.origin}/m/index`;
  }

  public render() {
    const { title, className, mode = 'normal',addonBottom = null, leftBtn, rightBtn, leftClick, rightClick, dark, transparent, ...otherProps } = this.props;
    const composeClass = cn(
      'auto-ui_navbar',
      {
        'auto-ui_navbar-dark': dark,
        'auto-ui_navbar-transparent': transparent,
        'auto-ui_navbar-large':mode === 'large'
      },
      className,
    );
    return (
      <div {...otherProps} className={composeClass}>
        {leftBtn && (
          <div className="auto-ui_navbar-leftbtn" onClick={leftClick || this.leftClick}>
            {
              leftBtn === true ? (
               (
                  <a href="javascript:;" className="auto-ui_navbar-btn">
                    {mode === 'large' ? <IconClose color = {dark ? '#fff' : '#000'} /> : <IconBack color = {dark ? '#fff' : '#000'}/>}
                  </a>
                )
              ) : leftBtn
            }
          </div>
        )}
        <div className="auto-ui_navbar-title">{title}</div>
        {rightBtn && (
          <div className="auto-ui_navbar-rightbtn" onClick={rightClick || this.rightClick}>
            {
              rightBtn === true ? (
                <i className="auto-ui_navbar-icon auto-ui_navbar-rightbtn-icon" />
              ) : rightBtn
            }
          </div>
        )}
        {
          addonBottom && mode === 'large' ? <div className="auto-ui_navbar-subTitle">{addonBottom}</div> : null
        }
      </div>
    );
  }
}
