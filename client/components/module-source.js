'use strict'

import React from 'react'

export const ModuleSource = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    sourceName: React.PropTypes.string.isRequired,
    imgSrc: React.PropTypes.string
  },
  render () {
    let {imgSrc, sourceName} = this.props
    let imgClassName = imgSrc && `img-badge`
    let className = !imgSrc && `logo logo-${this.props.sourceName} ${this.props.className}`
    let source = this.props.data[sourceName]
    let url = source ? source.url : ''
    let img = imgSrc && <img src={imgSrc} alt={sourceName} className={imgClassName}/>

    return (
      source && source.connected
        ? <a href={url} target='_blank' target="_blank" className={className}>{img}</a>
        : null
    )
  }
})

export default ModuleSource
