'use strict'

import React from 'react'

export const SearchResult = React.createClass({
  render () {
    const result = this.props.data
    const infoUrl = `/info/${result.name}`
    return (
      <div id="query-results-container" className="panel col-xs-12 col-sm-10 col-md-8 col-rg-6">
        <div id="query-result" className="tm result txt-left module-result">
          <div className="module-rank"></div>
          <div className="module-details">
            <span className="icon icon-hex-4"></span>
            <div className="cf">
              <h3 className="m0 fl-left">
                <a target="_blank" href={infoUrl}>{result.name}</a>
                <span className="txt-dimmed"> {result.npm.version}</span>
              </h3>
              <div className="fl-right module-sources">
                {result.npm.connected ? <a href={result.npm.url} target='_blank' className="logo logo-npm logo-npm-large" target="_blank"></a> : null}
                {result.github.connected ? <a href={result.github.url} target='_blank' className="logo logo-git logo-git-large" target="_blank"></a> : null}
                {result.travis.connected ? <a href={result.travis.url} target='_blank' className="logo logo-travis logo-travis-large" target="_blank"></a> : null}
              </div>
            </div>
            <div className="module-time">
              <p className="mbhalf"><span className="module-modified"></span> module created <span className="module-created">30 minutes ago</span></p>
            </div>
            <ul className="list-unstyled list-inline cf">
              <li className="module-git-eye-line">
                <a aria-hidden="true" className="icon-eye"></a>
                <a target="_blank" href={result.github.url + '/watchers'} className="module-git-eye"> {result.github.watches} </a>
              </li>
              <li className="module-git-star-line">
                <a aria-hidden="true" className="icon icon-star"></a>
                <a target="_blank" href={result.github.url + '/stargazers'} className="module-git-star"> {result.github.stars} </a>
              </li>
              <li className="module-git-fork-line">
                <span aria-hidden="true" className="icon icon-fork"></span>
                <a target="_blank" href={result.github.url + '/network'} className="module-git-fork">{result.github.forks}</a>
              </li>
            </ul>
            <p className="mb0 mthalf fl-right"><a className="module-similar">See related modules →</a></p>
          </div>
        </div>
      </div>
    )
  }
})

export default SearchResult
