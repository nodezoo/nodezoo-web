'use strict'

import React from 'react'
import GithubResult from './search-github'
import ModuleSource from './module-source'
import TravisBadge from './travis-badge'

export const SearchResult = React.createClass({
  hasBuild (travis) {
    return travis && travis.connected && (travis.buildState === 'failed' || travis.buildState === 'passed')
  },
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
          {this.hasBuild(result.travis) ?
            <div className="fl-right module-badges">
              <TravisBadge buildState={result.travis.buildState}/>
            </div> : null}
          <div className="fl-right module-sources">
            <ModuleSource data={result} sourceName="github"/>
            <ModuleSource data={result} sourceName="npm"/>
            {this.hasBuild(result.travis) ? null :
              <ModuleSource data={result} sourceName="travis"/>}
          </div>
        </div>
        <p className="module-description">
          <i>{result.npm.description}</i>
        </p>
        <GithubResult github={result.github}/>
      </div>
    )
  }
})

export default SearchResult
