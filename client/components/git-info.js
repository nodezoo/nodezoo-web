'use strict'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export const GitInfo = React.createClass({
  propTypes: {
    github: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {showClonePopUp: false,
            showSshPopUp: false}
  },
  transitionCloneCopy: function () {
    var self = this
    // might want to bring in react-addons transition group for this
    this.setState({showClonePopUp: true})
    setTimeout(function () {
      self.setState({showClonePopUp: false})
    }, 500)
  },
  transitionSshCopy: function () {
    var self = this
    this.setState({showSshPopUp: true})
    setTimeout(function () {
      self.setState({showSshPopUp: false})
    }, 500)
  },
  render () {
    return (
      <div className="panel-module">
        <h2 className="mt0"><a href={this.props.github.url} target="_blank" className="logo logo-github"></a> Github</h2>
        <ul className="list-unstyled module-info-list cf">
          <li><strong className="module-info-heading">Name:</strong> {this.props.github.name}</li>
          <li><strong className="module-info-heading">User:</strong> {this.props.github.user}</li>
          <li><strong className="module-info-heading">Repo:</strong> {this.props.github.repo}</li>
          <li><strong className="module-info-heading">Stars:</strong> {this.props.github.stars}<span className="icon icon-star-sm"></span></li>
          <li><strong className="module-info-heading">Forks:</strong> {this.props.github.forks}<span className="icon icon-fork-sm"></span></li>
          <li><strong className="module-info-heading">Watches:</strong> {this.props.github.watches}<span className="icon icon-eye-sm"></span></li>
          <li><strong className="module-info-heading">Last commit:</strong> {this.props.github.last}</li>
          <li><strong className="module-info-heading">Project URL:</strong> <a href={this.props.github.urlRepo}>{this.props.github.urlRepo}</a></li>
          <li>
            <strong className="module-info-heading">Clone URL:</strong>
            &nbsp;{this.props.github.urlClone} &nbsp;
            <CopyToClipboard text={this.props.github.urlClone}>
              <span><a onClick={this.transitionCloneCopy} className="icon-clipboard"></a></span>
            </CopyToClipboard>
            <span className={this.state.showClonePopUp ? 'visible' : 'hidden'}> Copied!</span>
          </li>
          <li>
            <strong className="module-info-heading">SSH URL:</strong>
            &nbsp;{this.props.github.urlSsh} &nbsp;
            <CopyToClipboard text={this.props.github.urlSsh}>
              <span><a onClick={this.transitionSshCopy} className="icon-clipboard"></a></span>
            </CopyToClipboard>
            <span className={this.state.showSshPopUp ? 'visible' : 'hidden'}> Copied!</span>
          </li>
          <li><strong className="module-info-heading">Open PR's:</strong> {this.props.github.pullRequests}</li>
        </ul>
      </div>
    )
  }
})

export default GitInfo
