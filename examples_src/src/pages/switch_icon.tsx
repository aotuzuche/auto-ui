import * as React from 'react';
import { Layout, Switch } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { active: true };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Switch o="开" i="关" icon={true} active={this.state.active} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    );
  }

  private onChange = (active: boolean) => {
    this.setState({ active });
  }
}

export default Demo;
