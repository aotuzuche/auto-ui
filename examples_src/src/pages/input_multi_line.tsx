import * as React from 'react';
import { Input, Layout } from '../auto-ui';

class Demo extends React.PureComponent {
  public state = { value: '' };

  public render() {
    return (
      <Layout>
        <Layout.Body>
          <Input multi={true} value={this.state.value} placeholder="请输入..." onChange={this.onChange} />
        </Layout.Body>
      </Layout>
    );
  }

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: evt.target.value,
    });
  }
}

export default Demo;
