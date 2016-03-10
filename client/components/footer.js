'use strict'

import React from 'react'

export const Footer = React.createClass({
  render () {
    return (
      <footer className="container-fluid txt-center txt-small txt-dimmed mtb" role="contentinfo">
        <p className="mb0">
          Hosting and development of this project is sponsored by <a href="http://www.nearform.com/">nearForm</a>.
        </p>
        <p className="mt0"><a href="https://github.com/rjrodger/nodezoo">See the project on Github</a></p>
      </footer>
    )
  }
})

export default Footer
