'use strict'

import React from 'react'

export const CoverallsInfo = React.createClass({
  propTypes: {
    coveralls: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><span className="logo logo-coveralls"></span> Coveralls</h2>
        <ul className="list-unstyled cf module-info-list">
          <li><strong className="module-info-heading">Name:</strong> {this.props.coveralls.name}</li>
          <li><strong className="module-info-heading">URL:</strong> <a href={this.props.coveralls.url}>{this.props.coveralls.url}</a></li>
          <li><strong className="module-info-heading">Coverage change:</strong> {this.props.coveralls.coverageChange}</li>
          <li><strong className="module-info-heading">Covered percent:</strong> {this.props.coveralls.coveredPercent}</li>
          <li><strong className="module-info-heading">Badge:</strong> <img src={this.props.coveralls.badgeUrl} alt="Coveralls"/></li>
        </ul>
      </div>
    )
  }
})

export default CoverallsInfo
