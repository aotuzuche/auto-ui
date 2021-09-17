import * as React from 'react'
import { Layout, Toast, Upload, Cell, Card } from '../auto-ui'
import { http } from 'auto-libs'
class Demo extends React.PureComponent {
  state = { active: true, data: {}, fileList: [], fileList1: [], fileList2: [], fileList3: [] }

  async componentDidMount() {
    const ax = await http.get(
      'https://testh5.atzuche.com/appserver/h5/v52/survey/uploadPic?token=cb390489f6654aca825ccfc43b85fd94&requestId=1631689320910&h5Platform=WEB',
    )

    this.setState({
      data: ax,
    })
  }

  render() {
    const { data, fileList, fileList1, fileList2, fileList3 } = this.state
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body>
          <Cell.Title text="正常情况" />
          <Card>
            <Upload
              data={data}
              id="test"
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList: [...fl],
                })
              }}
              fileList={fileList}
            />
          </Card>

          <Cell.Title text="多张 5张" />
          <Card>
            <Upload
              data={data}
              id="test1"
              maxCount={5}
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList1: [...fl],
                })
              }}
              fileList={fileList1}
            />
          </Card>

          <Cell.Title text="多选 多张 5张" />
          <Card>
            <Upload
              data={data}
              id="test2"
              maxCount={5}
              multiple
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList2: [...fl],
                })
              }}
              fileList={fileList2}
            />
          </Card>

          <Cell.Title text="自定义fileName" />
          <Card>
            <Upload
              data={data}
              id="test3"
              maxCount={5}
              multiple
              filename="tttteeeesssstttt"
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList3: [...fl],
                })
              }}
              fileList={fileList3}
            />
          </Card>

          <Cell.Title text="disabled" />
          <Card>
            <Upload
              data={data}
              id="test4"
              maxCount={5}
              multiple
              disabled
              filename="tttteeeesssstttt"
              onError={e => Toast(e.message)}
              onSuccess={fl => {
                this.setState({
                  fileList3: [...fl],
                })
              }}
              fileList={fileList3}
            />
          </Card>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
