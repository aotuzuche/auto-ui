import * as React from 'react';
import { Cell, Layout, Switch } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { active: true, disabled: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Cell>
            <Cell.Row title="通过我设置disabled">
              <Switch active={this.state.disabled} onChange={this.onDisabledChange} style={{ marginLeft: 'auto' }} />
            </Cell.Row>
          </Cell>
          <br />
          <p>disabled = {this.state.disabled ? 'true' : 'false'}</p>
          <Switch disabled={this.state.disabled} active={this.state.active} onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    );
  }

  private onDisabledChange = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  private onChange = () => {
    this.setState({ active: !this.state.active });
  }
}

export default Demo;
