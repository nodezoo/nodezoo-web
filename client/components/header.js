'use strict'

import React from 'react'

export const Header = React.createClass({
  render () {
    return (
      <header className="container-fluid mtb txt-center" role="banner">
        <a href="http://nodezoo.com" className="logo logo-nodezoo"></a>
      </header>
    )
  }
})

export default Header
