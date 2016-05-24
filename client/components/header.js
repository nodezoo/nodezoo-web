'use strict'

import React from 'react'
import { pushPath } from 'redux-simple-router'

export const Header = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
    routing: React.PropTypes.object.isRequired
  },

  handleLogIn() {
    const { dispatch, routing } = this.props

    dispatch(pushPath('/auth/login', routing))
  },

  render () {
    return (
      <header role="banner">
        <div className="mtb txt-right">
          {(() => {
            const { login, routing } = this.props

            if (routing.path.match(/\/auth\/login/) === null) {
              if (!login.userInfo)
                return <button className="btn btn-large col col-xs-12 col-sm-2" onClick={this.handleLogIn}>Log In</button>

              // TODO Replace for a menu to allow the user to perform different actions
              return <div>{login.userInfo.fullName}</div>
            }
          })()}
        </div>
        <div className="container-fluid mtb txt-center">
          <a href="/" className="logo logo-nodezoo"></a>
        </div>
      </header>
    )
  }
})

export default Header
