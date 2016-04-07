'use strict'

import React from 'react'

export const TravisBadge = React.createClass({
  propTypes: {
    buildState: React.PropTypes.string.isRequired
  },

  render () {

    return (
      <div className={this.props.className + " travis-badge"} >
        <label>build</label>
        <span className={'status ' + this.props.buildState}>{this.props.buildState}</span>
      </div>
    )
  }
})

export default TravisBadge
