import cn from 'classnames';
import IconBackS from '../icon/back_s';
import React, { MouseEventHandler, ReactNode } from 'react';
import './style.scss';

export interface NavBarProps {
  title?: ReactNode;
  className?: string;
  leftBtn?: ReactNode;
  rightBtn?: ReactNode;
  leftClick?: MouseEventHandler<HTMLDivElement>;
  rightClick?: MouseEventHandler<HTMLDivElement>;
  dark?: boolean;
  transparent?: boolean;
  [otherProps: string]: any;
}

export default class NavBar extends React.Component<NavBarProps, any> {
  public leftClick: MouseEventHandler<HTMLDivElement> = () => {
    window.history.go(-1);
  }

  public rightClick: MouseEventHandler<HTMLDivElement> = () => {
    window.location.href = `${window.location.origin}/m/index`;
  }

  public render() {
    const { title, className, leftBtn, rightBtn, leftClick, rightClick, dark, transparent, ...otherProps } = this.props;
    const composeClass = cn(
      'auto-ui_navbar',
      {
        'auto-ui_navbar-dark': dark,
        'auto-ui_navbar-transparent': transparent,
      },
      className,
    );
    return (
      <div {...otherProps} className={composeClass}>
        {leftBtn && (
          <div className="auto-ui_navbar-leftbtn" onClick={leftClick || this.leftClick}>
            {leftBtn === true ? (
              <a className="auto-ui_navbar-btn">
                <IconBackS color={dark ? '#fff' : '#000'} />
              </a>
            ) : (
              leftBtn
            )}
          </div>
        )}
        <div className="auto-ui_navbar-title">{title}</div>
        {rightBtn && (
          <div className="auto-ui_navbar-rightbtn" onClick={rightClick || this.rightClick}>
            {rightBtn === true ? <i className="auto-ui_navbar-icon auto-ui_navbar-rightbtn-icon" /> : rightBtn}
          </div>
        )}
      </div>
    );
  }
}
