import * as React from 'react'
import { Layout, Toast, Upload } from '../auto-ui'
import { http } from 'auto-libs'
const OSS = require('ali-oss')

console.log(OSS)

class Demo extends React.PureComponent {
  state = { active: true, data: {}, fileList: [] }

  async componentDidMount() {
    const ax = await http.get(
      'https://testh5.atzuche.com/appserver/h5/v52/survey/uploadPic?token=cb390489f6654aca825ccfc43b85fd94&requestId=1631689320910&h5Platform=WEB',
    )

    console.log(ax)

    this.setState({
      data: ax,
    })
  }

  render() {
    const { data, fileList } = this.state
    return (
      <Layout supportDarkMode={!!localStorage.getItem('darkMode')}>
        <Layout.Body
          onClick={() => {
            console.log(fileList)
          }}
        >
          <Upload
            data={data}
            id="test"
            multiple
            filename="测试车架号"
            maxCount={10}
            onError={e => Toast(e.message)}
            onSuccess={fl => {
              this.setState({
                fileList: [...fl],
              })
            }}
            fileList={fileList}
          />
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
