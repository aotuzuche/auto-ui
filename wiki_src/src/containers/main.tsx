import * as React from 'react';
import './main.scss';

const Main: React.FC<any> = props => {
  return <main className="web-main">{props.children}</main>;
};

export default Main;
