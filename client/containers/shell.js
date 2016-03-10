'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const Shell = React.createClass({
  render () {
    const {children} = this.props

    return (
      <div className="shell">
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
})


function mapStatesToProps (state) {
  return {
  }
}

export default connect(mapStatesToProps)(Shell)
