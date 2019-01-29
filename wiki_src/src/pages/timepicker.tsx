import * as React from 'react';
import C from 'classnames';
import MobilePreview from '../components/mobilePreview';

export default class View extends React.PureComponent {
  public state = {
    previewUrl: 'https://easonchiu.github.io/aotuui/examples/#',
  }

  public render() {
    return (
      <div>
        <div className="markdown-content">
<h1>TimePicker</h1>
        </div>
        <MobilePreview link={this.state.previewUrl} />
      </div>
    );
  }

  private onCodeClick = (url: string) => {
    this.setState({
      previewUrl: 'https://easonchiu.github.io/aotuui/examples/#' + url,
    })
  }
}
  