import * as React from 'react';
import { Layout, Space, Switch } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { active: true };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Switch o="开" i="关" active={this.state.active} onChange={this.onChange} />
          <Space size={2} />
          <Switch o="O" i="I" active={!this.state.active} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    );
  }

  private onChange = () => {
    this.setState({ active: !this.state.active });
  }
}

export default Demo;
