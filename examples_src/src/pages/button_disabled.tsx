import * as React from 'react';
import { Button, Cell, Layout, Space, Switch, Toast } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { disabled: false };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Button disabled={this.state.disabled} onClick={this.onButtonClick}>
            按钮
          </Button>
          <br />
          <Cell>
            <Cell.Row>
              <Button onClick={this.onButtonClick} mini={true} disabled={this.state.disabled}>
                按钮
              </Button>
              <Space size={2} />
              <Button type="danger" onClick={this.onButtonClick} mini={true} disabled={this.state.disabled}>
                按钮
              </Button>
              <Space size={2} />
              <Button onClick={this.onButtonClick} mini={true} disabled={this.state.disabled}>
                按钮
              </Button>
              <Space size={2} />
              <Button type="default" onClick={this.onButtonClick} mini={true} disabled={this.state.disabled}>
                按钮
              </Button>
            </Cell.Row>
            <Cell.Row title="通过我设置disabled">
              <Switch active={!this.state.disabled} onChange={this.onClick} style={{ marginLeft: 'auto' }} />
            </Cell.Row>
          </Cell>
        </Layout.Body>
      </Layout>
    );
  }

  private onClick = (disabled: boolean) => {
    this.setState({ disabled: !disabled });
  }

  private onButtonClick = () => {
    Toast('点击事件');
  }
}

export default Demo;
