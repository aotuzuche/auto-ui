import React, { MouseEventHandler, ReactNode } from 'react';
import './style.css';
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
    leftClick: MouseEventHandler<HTMLDivElement>;
    rightClick: MouseEventHandler<HTMLDivElement>;
    render(): JSX.Element;
}
