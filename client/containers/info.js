'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {getInfo} from '../actions/info'
import {GitInfo} from '../components/gitInfo'
import {NpmInfo} from '../components/npmInfo'

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
    console.log(this.props.result, 'result')

    if (this.props.result) {
      const {no_github, github, no_npm, npm, no_travis, travis} = this.props.result

      body = (
          <div className="panel panel-module-info txt-left">
            {(() => {
              if (!no_npm) {
                return <NpmInfo npm={npm} />
              }
            })()}
            
            

            {(() => {
              if (!no_github) {
                 return <GitInfo github={github}  npm={npm} />
              }
            })()}
            
            {(() => {
              if (!no_travis) {
                return (
                  <div className="panel-module">
                    <h2 className="mt0"><span className="logo logo-travis"></span> Travis-Ci</h2>
                    <ul className="list-unstyled cf module-info-list">
                      <li><strong className="module-info-heading">Travis ID:</strong> {travis.id}</li>
                      <li><strong className="module-info-heading">Group:</strong> {travis.group}</li>
                      <li><strong className="module-info-heading">Description:</strong> {travis.description}</li>
                      <li><strong className="module-info-heading">Last build:</strong> {travis.last_build_state}</li>
                      <li><strong className="module-info-heading">Last build at:</strong> {travis.last_build_started_at}</li>
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

function mapStatesToProps (state) {

  return {
    result: state.info.result
  }
}

export default connect(mapStatesToProps)(Info)
