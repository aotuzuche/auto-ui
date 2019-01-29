import * as React from 'react';
import { Button, Layout, TimePicker, Toast } from '../aotuui';

class Demo extends React.PureComponent {
  public state = { visible: false };

  public render() {
    const data = [
      {
        day: new Date(2018, 4, 1),
        times: ['0020', '0020'],
      },
      {
        day: new Date(2018, 4, 2),
        times: ['0500', '1100'],
      },
      {
        day: new Date(2018, 4, 3),
        times: [['0000', '0015'], ['0145', '1200']],
      },
    ];
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onClick}>显示ActionSheet</Button>
          <TimePicker
            data={data}
            format={['MM月dd日 周wk', 'h点', 'm分']}
            interval={66}
            defaultDay={new Date(2018, 4, 3, 2, 0)}
            onChange={this.showTime}
          />
        </Layout.Body>
      </Layout>
    );
  }

  private onClick = () => {
    this.setState({ visible: !this.state.visible });
  }

  private showTime = (value: Date) => {
    Toast(value.toString());
  }
}

export default Demo;
