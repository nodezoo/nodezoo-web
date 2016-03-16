'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {getInfo} from '../actions/info'

export const Info = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  componentDidMount () {
    const dispatch = this.props.dispatch
    const moduleName = this.props.params.moduleName

    dispatch(getInfo(moduleName))
  },

  render () {
    const moduleName = this.props.params.moduleName
    let body = null

    if (this.props.result) {
      const {no_github, github, no_npm, npm, no_travis, travis} = this.props.result
      body = (
          <div className="panel panel-module-info txt-left">
            {(() => {
              if(!no_npm) {
              var arr = [npm.desc,npm.version]
               var verified = verify(arr);
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-npm"></span> npm</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th className="npmTableHead"><strong>Tagline:</strong></th>
                          <td className="tableInfo">{verified[0]}</td>
                        </tr>
                        <tr>
                          <th className="npmTableHead"><strong>Version:</strong></th>
                          <td className="tableInfo">{verified[1]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              }
            })()}



            {(() => {
              if (!no_github) {
                var arr = [github.last,github.url,github.watches,github.forks,github.stars]
                 var verified = verify(arr);
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-git"></span> Github</h2>
                      <table>
                        <tbody>
                          <tr>
                            <th className="gitTableHead"><strong>Created:</strong></th>
                            <td className="tableInfo">{verified[0]}</td>
                          </tr>
                          <tr>
                            <th className="gitTableHead"><strong>URL:</strong></th>
                            <td className="tableInfo"><a href={github.url}> {verified[1]}</a></td>
                          </tr>
                          <tr>
                            <th className="gitTableHead"><strong>Watches:</strong></th>
                            <td className="tableInfo">{verified[2]} <span className="icon icon-watch-sm"></span></td>
                          </tr>
                          <tr>
                            <th className="gitTableHead"><strong>Forks:</strong></th>
                            <td className="tableInfo">{verified[3]} <span className="icon icon-fork-sm"></span></td>
                          </tr>
                          <tr>
                            <th className="gitTableHead"><strong>Stars:</strong></th>
                            <td className="tableInfo">{verified[4]} <span className="icon icon-star-sm"></span></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                )
              }
            })()}

            {(() => {
              if (!no_travis) {
                var arr = [travis.id,travis.group,travis.description,travis.last_build_state,travis.last_build_started_at]
                 var verified = verify(arr);
                 var state
                 if(verified[3] == "passed"){
                     state = "icon icon-tick"
                  } else if (verified[3] == "failed") {
                      state = "icon icon-x"
                    }
                 else {state = ""}
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-travis"></span> Travis-Ci</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th className="travisTableHead"><strong>Travis ID:</strong></th>
                          <td className="tableInfo">{verified[0]}</td>
                        </tr>
                        <tr>
                          <th className="travisTableHead"><strong>Group:</strong></th>
                          <td className="tableInfo">{verified[1]}</td>
                        </tr>
                        <tr>
                          <th className="travisTableHead"><strong>Description:</strong></th>
                          <td className="tableInfo">{verified[2]}</td>
                        </tr>
                        <tr>
                          <th className="travisTableHead"><strong>Last build:</strong></th>
                          <td className="tableInfo">{verified[3]} <span className={state}></span></td>
                        </tr>
                        <tr>
                          <th className="travisTableHead"><strong>Last built:</strong></th>
                          <td className="tableInfo">{verified[4]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              }
            })()}
        </div>
      )

      if (no_github || no_npm || no_travis) {
        setTimeout(() => {
          this.props.dispatch(getInfo(moduleName))
        }, 3000)
      }
    }

    return (
      <div className="info">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-8 col-md-8 col-rg-6">
            <div className="module-header cf">
              <div className="row middle-xs">
                <h1 className="col-xs-12 col-sm-7 m0">{moduleName}</h1>
                <a href="/" className="col-xs-12 col-sm-5">← Back to search results</a>
              </div>
            </div>

            {body}
          </div>
        </div>
      </div>
    )
  }
})

function verify(data){
  for(var field in data){
    if(!data[field]){
      data[field] = "no data available"
    }
  }
  return data;
}

function mapStatesToProps (state) {

  return {
    result: state.info.result
  }
}

export default connect(mapStatesToProps)(Info)
