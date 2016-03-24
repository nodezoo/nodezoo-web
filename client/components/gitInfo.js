'use strict'

import React from 'react'

export const GitInfo = React.createClass({
  propTypes: {
    npm: React.PropTypes.object.isRequired,
    github: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><span className="logo logo-git"></span> Github</h2>
        <ul className="list-unstyled module-info-list cf">
          <li><strong className="module-info-heading">Created:</strong> {this.props.github.last}</li>
          <li><strong className="module-info-heading">URL:</strong><a href="#"> {this.props.npm.giturl}</a></li>
          <li><strong className="module-info-heading">Watches:</strong> {this.props.github.watches}</li>
          <li><strong className="module-info-heading">Forks:</strong> {this.props.github.forks}</li>
          <li><strong className="module-info-heading">Stars:</strong> {this.props.github.stars}</li>
        </ul>
      </div>
    )          
  } 
})

export default GitInfo
