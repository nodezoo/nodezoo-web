'use strict'

import React from 'react'
import {Home} from '../containers/home'

const Shell = React.createClass({
  render () {
    const {children} = this.props

    return (
      <div className="shell">
        {children} || <Home />
      </div>
    )
  }
})

export default Shell
