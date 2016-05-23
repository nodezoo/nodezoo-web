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
        <Header {...this.props} />
        {children}
        <Footer />
      </div>
    )
  }
})


function mapStatesToProps (state) {
  return {
    login: state.login,
    routing: state.routing
  }
}

export default connect(mapStatesToProps)(Shell)
