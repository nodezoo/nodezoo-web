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
      <div className="query-results-container col-xs-12 col-sm-10 col-md-8 col-rg-6">
        <div className="cf">
          <h2 className="m0 fl-left">
            <span className="icon icon-hex-4"></span>
            <a target="_blank" href={infoUrl}>{result.name}</a>
          </h2>
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
        <p className="module-description txt-dimmed">
          {result.npm.description} <br/>
          <span className="txt-dimmer txt-small"> v{result.npm.version} Updated 16 days ago </span>
        </p>
        <GithubResult github={result.github}/>
      </div>
    )
  }
})

export default SearchResult
