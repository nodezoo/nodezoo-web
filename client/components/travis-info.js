'use strict'

import React from 'react'

export const TravisInfo = React.createClass({
  propTypes: {
    travis: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><span className="logo logo-travis"></span> Travis-Ci</h2>
        <ul className="list-unstyled cf module-info-list">
          <li><strong className="module-info-heading">Name:</strong> {this.props.travis.name}</li>
          <li><strong className="module-info-heading">URL:</strong> <a href={this.props.travis.url}>{this.props.travis.url}</a></li>
          <li><strong className="module-info-heading">ID:</strong> {this.props.travis.id}</li>
          <li><strong className="module-info-heading">Active:</strong> {this.props.travis.active.toString()}</li>
          <li><strong className="module-info-heading">Build state:</strong> {this.props.travis.buildState}</li>
          <li><strong className="module-info-heading">Last built at:</strong> {this.props.travis.lastBuilt}</li>
        </ul>
      </div>
    )
  }
})

export default TravisInfo
