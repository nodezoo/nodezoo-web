'use strict'

import React from 'react'
import {connect} from 'react-redux'

export const Home = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  componentDidMount () {

  },

  componentWillUnmount () {

  },

  handleSearch (event) {
    event.preventDefault()
  },

  render () {

    return (
      <div className="home">
        <div className="row center-xs">
          <form id="query-form" className="panel col-xs-12 col-sm-8 col-md-8 col-rg-6">
            <fieldset>Search for <a href="http://nodejs.org">Node.js</a> modules</fieldset>
            <input type="search" placeholder="Module name" id="query-term" className="input-large" />
            <button id="query-submit" type="submit" className="btn btn-large">Find modules</button>
          </form>
        </div>

        <div className="row center-xs">
          <div id="query-results-container" className="panel col-xs-12 col-sm-8 col-md-8 col-rg-6">
            <div id="query-result" className="tm result txt-left module-result">
              <div className="module-rank"></div>
              <div className="module-details">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <h3 className="m0">
                      <a className="module-site" target="_blank">Module name</a>
                      <a className="logo logo-npm" target="_blank"></a>
                      <a className="logo logo-git" target="_blank"></a>
                    </h3>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 module-git-info">
                    <ul className="list-unstyled list-inline cf">
                      <li><a className="icon icon-info" target="_blank"></a></li>
                      <li className="module-git-star-line">
                        <span aria-hidden="true" className="icon icon-star"></span>
                        <span className="module-git-star">2</span>
                      </li>
                      <li className="module-git-fork-line">
                        <span aria-hidden="true" className="icon icon-fork"></span>
                        <span className="module-git-fork">5</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="module-time txt-dimmed">
                  <p><span className="module-modified"></span> created at <span className="module-created">5/1/2016</span></p>
                </div>

                <p className="module-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="mb0"><a className="module-similar">See similar modules →</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})

function mapStatesToProps (state) {
  return {
  }
}

export default connect(mapStatesToProps)(Home)
