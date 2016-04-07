'use strict'

import React from 'react'

import GithubResult from './search-github'

export const SearchResult = React.createClass({
  render () {
    const result = this.props.data
    const infoUrl = `/info/${result.name}`
    return (
      <div id="query-results-container" className="panel col-xs-12 col-sm-10 col-md-8 col-rg-6">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <span className="icon icon-hex-4"></span>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 txt-left">
            <a target="_blank" href={infoUrl}>{result.name}</a>
            <span className="txt-dimmed"> {result.npm.version}</span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <GithubResult github={result.github} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {result.npm.description}
          </div>
        </div>
        <p className="mb0 mthalf fl-right"><a className="module-similar">See related modules →</a></p>
      </div>
    )
  }
})

export default SearchResult

// <div id="query-result" className="tm result txt-left module-result">
//   <div className="module-rank"></div>
//   <div className="module-details">
//     <span className="icon icon-hex-4"></span>
//     <div className="cf">
//       <h3 className="m0 fl-left">
//         <a target="_blank" href={infoUrl}>{result.name}</a>
//         <span className="txt-dimmed"> {result.npm.version}</span>
//       </h3>
//       <div className="fl-right module-sources">
//         {result.npm.connected ? <a href={result.npm.url} target='_blank' className="logo logo-npm logo-npm-large" target="_blank"></a> : null}
//         {result.travis.connected ? <a href={result.travis.url} target='_blank' className="logo logo-travis logo-travis-large" target="_blank"></a> : null}
//       </div>
//     </div>
//     <div className="module-time">
//       <p className="mbhalf"><span className="module-modified"></span> module created <span className="module-created">30 minutes ago</span></p>
//     </div>
