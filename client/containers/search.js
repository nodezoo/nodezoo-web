'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {search} from '../actions/search'
import {SearchResult} from '../components/search-result'
import { Row, Col, RowCol } from '../components/layout'

export const Home = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  handleSearch (event) {
    event.preventDefault()

    const {query} = this.refs
    const {dispatch} = this.props

    dispatch(search(query.value))
  },

  render () {
    let query = this.props.query
    let items = this.props.result
    let body = null

    if (!items || items.length <= 0) {
      body = (
        query ? <div className="alert alert-info alert-has-icon txt-left">
          <p className="m0">No results found for: {query}</p>
        </div> : ''
      )
    }
    else {
      body = items.map((item) => {
        return <SearchResult key={item.name} data={item} />
      })
    }

    return (
      <Col xs={12}>
        <RowCol rowClass="center-xs" colElement='form' id="query-form" xs={12} md={8} className="panel" onSubmit={this.handleSearch}>
          <Row>
            <Col xs={12} sm={8}>
              <input ref="query" type="search" placeholder="Module Name" id="query-term" className="input-large" />
            </Col>
            <Col xs={12} sm={4}>
              <button id="query-submit" type="submit" className="btn btn-large">Search</button>
            </Col>
          </Row>
        </RowCol>
        <Row className="center-xs">
          {body}
        </Row>
      </Col>
    )
  }
})

function mapStatesToProps (state) {
  return {
    query: state.search.query,
    result: state.search.result
  }
}

export default connect(mapStatesToProps)(Home)
