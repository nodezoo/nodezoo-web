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

      </div>
    )
  }
})

function mapStatesToProps (state) {
  return {
  }
}

export default connect(mapStatesToProps)(Home)
