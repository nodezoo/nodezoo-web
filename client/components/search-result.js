'use strict'

import React from 'react'
import GithubResult from './search-github'
import TravisBadge from './travis-badge'

export const SearchResult = React.createClass({
  render () {
    const result = this.props.data
    const infoUrl = `/info/${result.name}`
    return (
      <div id="query-results-container" className="panel col-xs-12 col-sm-10 col-md-8 col-rg-6">
        <span className="icon icon-hex-4"></span>
        <div className="cf">
          <h3 className="m0 fl-left">
            <a className="txt-uppercase" target="_blank" href={infoUrl}>{result.name}</a>
            <span className="txt-dimmed"> {result.npm.version}
            </span>
          </h3>
          <TravisBadge className="fl-right" buildState={result.travis.buildState}/>
          <div className="fl-right module-sources">
            {result.github.connected ? <a href={result.github.url} target='_blank' className="logo logo-git" target="_blank"></a> : null}
            {result.npm.connected ? <a href={result.npm.url} target='_blank' className="logo logo-npm" target="_blank"></a> : null}
            {result.travis.connected ? <a href={result.travis.url} target='_blank' className="logo logo-travis" target="_blank"></a> : null}
          </div>
        </div>
        <p className="module-description">
          <i>{result.npm.description}</i>
        </p>
        <GithubResult github={result.github} />
      </div>
    )
  }
})

export default SearchResult
