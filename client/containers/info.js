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
                    <ul className="list-unstyled cf module-info-list">
                      <li><strong className="module-info-heading">Tagline:</strong> {verified[0]}</li>
                      <li><strong className="module-info-heading">Version:</strong> {verified[1]}</li>
                    </ul>
                  </div>
                )
              }
            })()}
            
            

            {(() => {
              if (!no_github) {
                if(npm){
                  if(npm.giturl.indexOf('git+') >= 0){
                    npm.giturl = npm.giturl.slice(4)
                  }
                  else if(npm.giturl.indexOf('git://') >= 0){
                    npm.giturl = 'http://' + npm.giturl.slice(6)
                  }
                }
                var arr = [github.last,npm.giturl,github.watches,github.forks,github.stars]
                 var verified = verify(arr);
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-git"></span> Github</h2>
                    <ul className="list-unstyled module-info-list cf">
                      <li><strong className="module-info-heading">Created:</strong> {verified[0]}</li>
                      <li><strong className="module-info-heading">URL:</strong><a href={npm.giturl}> {verified[1]}</a></li>
                      <li><strong className="module-info-heading">Watches:</strong> {verified[2]}</li>
                      <li><strong className="module-info-heading">Forks:</strong> {verified[3]}</li>
                      <li><strong className="module-info-heading">Stars:</strong> {verified[4]}</li>
                    </ul>
                  </div>
                )
              }
            })()}
            
            {(() => {
              if (!no_travis) {
                var arr = [travis.id,travis.group,travis.description,travis.last_build_state,travis.last_build_started_at]
                 var verified = verify(arr);
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-travis"></span> Travis-Ci</h2>
                    <ul className="list-unstyled cf module-info-list">
                      <li><strong className="module-info-heading">Travis ID:</strong> {verified[0]}</li>
                      <li><strong className="module-info-heading">Group:</strong> {verified[1]}</li>
                      <li><strong className="module-info-heading">Description:</strong> {verified[2]}</li>
                      <li><strong className="module-info-heading">Last build:</strong> {verified[3]}</li>
                      <li><strong className="module-info-heading">Last build at:</strong> {verified[4]}</li>
                    </ul>
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
