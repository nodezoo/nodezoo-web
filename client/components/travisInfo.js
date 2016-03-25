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
            <li><strong className="module-info-heading">Travis ID:</strong> {this.props.travis.id}</li>
            <li><strong className="module-info-heading">Group:</strong> {this.props.travis.group}</li>
            <li><strong className="module-info-heading">Description:</strong> {this.props.travis.description}</li>
            <li><strong className="module-info-heading">Last build:</strong> {this.props.travis.last_build_state}</li>
            <li><strong className="module-info-heading">Last build at:</strong> {this.props.travis.last_build_started_at}</li>
          </ul>
      </div>
    )
  }
})

export default TravisInfo
