'use strict'

import React from 'react'
import {connect} from 'react-redux'

export const Info = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },

  componentDidMount () {
    const dispatch = this.props.dispatch
  },

  render () {
    const moduleName = this.props.params.moduleName

    return (
      <div className="info">
        {moduleName}
      </div>
    )
  }
})

function mapStatesToProps (state) {
  return {
    info: state.moduleInfo
  }
}

export default connect(mapStatesToProps)(Info)
