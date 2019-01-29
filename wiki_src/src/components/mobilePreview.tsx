import * as React from 'react';
import './mobilePreview.scss';

interface IProps {
  link: string;
}

const MobilePreview: React.FC<IProps> = props => {
  return (
    <div className="mobile-preview" key={props.link}>
      <header>{props.link}</header>
      <main>
        <iframe src={props.link} frameBorder="0" seamless={true} width={375} height={667} />
      </main>
    </div>
  );
};

export default MobilePreview;
