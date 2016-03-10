'use strict'

import React from 'react'

export const SearchResult = React.createClass({
  render () {
    const item = this.props.data
    const infoUrl = `/info/${item.name}`
    return (
      <div id="query-results-container" className="panel col-xs-12 col-sm-10 col-md-8 col-rg-6">
        <div id="query-result" className="tm result txt-left module-result">
          <div className="module-rank"></div>
          <div className="module-details">
            <span className="icon icon-hex-4"></span>
            <div className="cf">
              <h3 className="m0 fl-left">
                <a className="module-site" target="_blank" href={infoUrl}>{item.name}</a>
              </h3>

              <div className="fl-right module-sources">
                <a className="logo logo-npm logo-npm-large" target="_blank"></a>
                <a className="logo logo-git logo-git-large" target="_blank"></a>
                <a className="logo logo-travis logo-travis-large" target="_blank"></a>
              </div>
            </div>

            <div className="module-time">
              <p className="mbhalf"><span className="module-modified"></span> module created <span className="module-created">30 minutes ago</span></p>
            </div>

            <ul className="list-unstyled list-inline cf">
              <li>
                <a className="icon icon-info" target="_blank"></a>
              </li>

              <li className="module-git-star-line">
                <span aria-hidden="true" className="icon icon-star"></span>
                <span className="module-git-star">2</span>
              </li>

              <li className="module-git-fork-line">
                <span aria-hidden="true" className="icon icon-fork"></span>
                <span className="module-git-fork">5</span>
              </li>
            </ul>

            <p className="mb0 mthalf"><a className="module-similar">See similar modules →</a></p>
          </div>
        </div>
      </div>
    )
  }
})

export default SearchResult