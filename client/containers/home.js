'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {search} from '../actions/search'
import {SearchResult} from '../components/searchResult'

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

    const {query} = this.refs
    const {dispatch} = this.props

    dispatch(search(query.value))
  },

  render () {

    /*var List = React.createClass({
      render: function() {
        return (<div>
          { this.props.data.map(function(item) {
            return <div>{item}</div>
          })
          }
        </div>);
      }
    });

    var data =  ['red', 'green', 'blue'];

    React.render(<List data={ data }  />, document.body);*/

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
        return <SearchResult data={item} />
      })
    }

    return (
      <div className="home">

        <div className="row center-xs">
          <form id="query-form" className="panel col-xs-12 col-sm-10 col-md-8 col-rg-6" onSubmit={this.handleSearch}>
            <fieldset>Search for <a href="http://nodejs.org">Node.js</a> modules</fieldset>
            <input ref="query" type="search" placeholder="Module name" id="query-term" className="input-large" />
            <button id="query-submit" type="submit" className="btn btn-large">Find modules</button>
          </form>
        </div>

        <div className="row center-xs">
          {body}
        </div>
      </div>
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
