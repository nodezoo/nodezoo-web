'use strict'

import React from 'react'
import {connect} from 'react-redux'

export const Home = React.createClass({
  propTypes: {
    info: React.PropTypes.object.isRequired
  },

  render () {
    const {info} = this.props

    return (
      <div className="info">
        infoSection
      </div>
    )
  }
})

function mapStatesToProps (state) {
  return {
    info: state.info
  }
}

export default connect(mapStatesToProps)(Home)
