'use strict'

import React from 'react'
import {pushPath} from 'redux-simple-router'

export const Header = React.createClass({
  handleLogIn () {
    const {dispatch, state} = this.props

    dispatch(pushPath('login', state.routing))
  },

  render () {
    return (
      <header role="banner">
        <div className="mtb txt-right">
          {(() => {
            const {state} = this.props

            if (state.routing.path.match(/\/?login/) === null) {
              if (!state.login.isLoggedIn)
                return <button className="btn btn-large col col-xs-12 col-sm-2" onClick={this.handleLogIn}>Log In</button>

              // TODO Replace for a menu to allow the user to perform different actions
              return <div>{state.login.userName}</div>
            }
          })()}
        </div>
        <div className="container-fluid mtb txt-center">
          <a href="http://nodezoo.com" className="logo logo-nodezoo"></a>
        </div>
      </header>
    )
  }
})

export default Header
