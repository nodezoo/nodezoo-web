'use strict'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export const GitInfo = React.createClass({
  propTypes: {
    github: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><a href={this.props.github.url} target="_blank" className="logo logo-git"></a> Github</h2>
        <ul className="list-unstyled module-info-list cf">
          <li><strong className="module-info-heading">Created:</strong> {this.props.github.last}</li>
          <li><strong className="module-info-heading">URL:</strong>
            <a href={this.props.github.url} target="_blank"> {this.props.github.url}</a>
          </li>
          <li>
            <strong className="module-info-heading">Clone URL:</strong>
              &nbsp;{this.props.github.gitClone} &nbsp;
            <CopyToClipboard text={this.props.github.gitClone}>
              <button className="btn">Copy</button>
            </CopyToClipboard>
          </li>
          <li><strong className="module-info-heading">Watches:</strong> {this.props.github.watches}</li>
          <li><strong className="module-info-heading">Forks:</strong> {this.props.github.forks}</li>
          <li><strong className="module-info-heading">Stars:</strong> {this.props.github.stars}</li>
        </ul>
      </div>
    )
  }
})

export default GitInfo
