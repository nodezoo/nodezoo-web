'use strict'

import React from 'react'

export const NpmInfo = React.createClass({
  propTypes: {
    npm: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><span className="logo logo-npm"></span> npm</h2>
        <ul className="list-unstyled cf module-info-list">
          <li><strong className="module-info-heading">Name:</strong> {this.props.npm.name}</li>
          <li><strong className="module-info-heading">URL:</strong> <a href={this.props.npm.urlPkg}>{this.props.npm.urlPkg}</a></li>
          <li><strong className="module-info-heading">ID:</strong> {this.props.npm.id}</li>
          <li><strong className="module-info-heading">Description:</strong> {this.props.npm.description}</li>
          <li><strong className="module-info-heading">Latest version:</strong> {this.props.npm.latestVersion}</li>
          <li><strong className="module-info-heading">No. of releases:</strong> {this.props.npm.releaseCount}</li>
          <li><strong className="module-info-heading">Author:</strong> {this.props.npm.author.name}</li>
          <li><strong className="module-info-heading">Licence:</strong> {this.props.npm.licence}</li>
          <li><strong className="module-info-heading">Homepage:</strong> <a href={this.props.npm.homepage}>{this.props.npm.homepage}</a></li>
        </ul>
      </div>
    )
  }
})

export default NpmInfo
