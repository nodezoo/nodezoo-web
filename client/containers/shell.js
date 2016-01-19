'use strict'

import React from 'react'
import {connect} from 'react-redux'

const Shell = React.createClass({
  render () {
    const {children} = this.props

    return (
      <div className="shell">
        {children}
      </div>
    )
  }
})


function mapStatesToProps (state) {
  return {
  }
}

export default connect(mapStatesToProps)(Shell)
