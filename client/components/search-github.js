'use strict'

import React from 'react'

export const GithubResult = React.createClass({
  propTypes: {
    github: React.PropTypes.object.isRequired
  },
  render () {
    let colClasses = 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
    return (
      <div className="row">
        <div className={colClasses}>
          <span aria-hidden="true" className="icon-eye"></span>
          <a target="_blank" href={this.props.github.url + '/watchers'}> {this.props.github.watches} </a>
        </div>
        <div className={colClasses}>
          <span aria-hidden="true" className="icon-star"></span>
          <a target="_blank" href={this.props.github.url + '/stargazers'} >{this.props.github.stars}</a>
        </div>
        <div className={colClasses}>
          <span aria-hidden="true" className="icon-fork"></span>
          <a target="_blank" href={this.props.github.url + '/network'} >{this.props.github.forks}</a>
        </div>
      </div>
    )
  }
})

export default GithubResult
