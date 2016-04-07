'use strict'

import React from 'react'

export const GithubResult = React.createClass({
  propTypes: {
    github: React.PropTypes.object.isRequired
  },
  render () {
    let colClasses = "col-xs-3 col-sm-3 col-md-3 col-lg-3"
    return (
      <div className="row">
        <div className={colClasses}>
          <a href={this.props.github.url} target='_blank' className="logo logo-git logo-git-large" target="_blank"></a>
        </div>
        <a target="_blank" href={this.props.github.url + '/watchers'} className={colClasses}>
          <span aria-hidden="true" className="icon-eye"></span>
          <span> {this.props.github.watches} </span>
        </a>
        <a target="_blank" href={this.props.github.url + '/stargazers'} className={colClasses}>
          <span aria-hidden="true" className="icon-star"></span>
          <span>{this.props.github.stars}</span>
        </a>
        <a target="_blank" href={this.props.github.url + '/network'} className={colClasses}>
          <span aria-hidden="true" className="icon-fork"></span>
          <span>{this.props.github.forks}</span>
        </a>
      </div>
    )
  }
})

export default GithubResult
