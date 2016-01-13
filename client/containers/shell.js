'use strict'

import React from 'react'

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

export default Shell
