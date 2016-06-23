'use strict'

import React from 'react'
import classNames from 'classnames'

export const ModuleSource = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    sourceName: React.PropTypes.string.isRequired,
    imgSrc: React.PropTypes.string
  },
  render () {
    let {imgSrc, sourceName, className, data: {[sourceName]: source}, data: {[sourceName]: {url: url}}} = this.props
    let logoClass = classNames({[`logo logo-${sourceName} ${className}`]: !imgSrc})
    let img = imgSrc && <img src={imgSrc} alt={sourceName} className="img-badge"/>

    return (
      source && source.connected && <a href={url} target='_blank' target="_blank" className={logoClass}>{img}</a>
    )
  }
})

export default ModuleSource
