import './style.scss'
import React from 'react'
import MobileConfig from './config'
import { Link, Route, Switch } from 'react-router-dom'

import { NavBar } from 'auto-ui'

class MobileIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExact: props.match.isExact
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.isExact !== prevState.isExact) {
      return {
        isExact: nextProps.match.isExact
      }
    }
    return null
  }

  render() {
    return (
      <div className="mobile">
        {!this.state.isExact && <NavBar title="导航栏" leftBtn rightBtn />}
        {this.state.isExact && (
          <div>
            <h1 className="mobile-title">AUTO-UI</h1>
            <ul className="mobile-box">
              {MobileConfig.map((v, i) => {
                return (
                  <li key={i} className="mobile-link">
                    <Link to={v.path}>
                      <span>{v.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <div className="mobile-demo">
          <Switch>
            {MobileConfig.map((v, i) => {
              return <Route key={i} path={v.path} component={v.component} />
            })}
          </Switch>
        </div>
      </div>
    )
  }
}

export default MobileIndex
