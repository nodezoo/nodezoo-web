'use strict'

import React from 'react'

export const ModuleSource = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    sourceName: React.PropTypes.string.isRequired
  },
  render () {
    let className = `logo logo-${this.props.sourceName} ${this.props.className}`
    let source = this.props.data[this.props.sourceName]
    let url = source ? source.url : ''

    return (
      source && source.connected
        ? <a href={url} target='_blank' className={className} target="_blank"></a>
        : null
    )
  }
})

export default ModuleSource
