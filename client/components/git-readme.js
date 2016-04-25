'use strict'

import React from 'react'

export const GitReadme = React.createClass({
  propTypes: {
    github: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="panel-module" dangerouslySetInnerHTML={{__html: this.props.github.readme}} />
    )
  }
})

export default GitReadme
