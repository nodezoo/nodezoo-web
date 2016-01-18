'use strict'

import React from 'react'
import {connect} from 'react-redux'

export const Info = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },

  componentDidMount () {
    const dispatch = this.props.dispatch
  },

  render () {
    const moduleName = this.props.params.moduleName

    return (
      <div className="info">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-8 col-md-8 col-rg-6">

            <div className="module-header cf">
              <div className="row middle-xs">
                <h1 className="col-xs-12 col-sm-7 m0">Seneca</h1>
                <a href="/" className="col-xs-12 col-sm-5">← Back to search results</a>
              </div>
            </div>

          <div className="panel panel-module-info txt-left">
            <div className="panel-module">
              <h2 className="mt0"><span className="logo logo-npm"></span> npm</h2>
              <ul className="list-unstyled cf module-info-list">
                <li><strong className="module-info-heading">Version:</strong> 1.0.0</li>
                <li><strong className="module-info-heading">Created:</strong> 01/01/2013</li>
                <li><strong className="module-info-heading" className="module-info-heading">URL:</strong> <a href="#">npmjs.com/seneca</a></li>
                <li><strong className="module-info-heading">Rating:</strong> 4</li>
              </ul>
            </div>

            <div className="panel-module">
              <h2 className="mt0"><span className="logo logo-git"></span> Github</h2>

              <ul className="list-unstyled module-info-list cf">
                <li><strong className="module-info-heading">Version:</strong> 1.0.0</li>
                <li><strong className="module-info-heading">Created:</strong> 01/01/2013</li>
                <li><strong className="module-info-heading" className="module-info-heading">URL:</strong> <a href="#">github.com/senecajs/seneca</a></li>
                <li><strong className="module-info-heading">Rating:</strong> 4</li>
              </ul>
            </div>
          </div>

          <div className="alert alert-info alert-has-icon txt-left">
            <span className="icon icon-refresh-blue"></span>
            <p className="m0">Loading information. Please refresh the page.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
})

function mapStatesToProps (state) {
  return {
    info: state.moduleInfo
  }
}

export default connect(mapStatesToProps)(Info)
