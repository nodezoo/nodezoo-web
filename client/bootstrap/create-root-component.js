'use strict'

// Modules to handle react-router and
// syncing it up with our Redux store.
import React from 'react'
import {Provider} from 'react-redux'
import {createHistory} from 'history'
import {syncReduxAndRouter} from 'redux-simple-router'
import {Router, Route, IndexRoute} from 'react-router'

// Our container components.
import Shell from '../containers/shell'
import Search from '../containers/search'
import Info from '../containers/info'
import Login from '../containers/login'
import ResetPassword from '../containers/reset-password'
import ChangePassword from '../containers/change-password'
import Profile from '../containers/profile'

export default function createRootComponent (store) {
  // Sets react router up so that it uses browser
  // history, enables client side routing
  const history = createHistory()

  // Binds redux and react router so
  // that state is shared between both.
  syncReduxAndRouter(history, store)

  // Redirects to the login page if the user
  // is not logged in
  function requireAuth(nextState, replace) {
    if (!store.getState().login.userInfo) {
      replace(store.getState().routing, '/auth/login')
    }
  }

  // This is our root component, it's a set of routes
  // composed together with our redux store, the Provider
  // component handles passing our state to the router.
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Shell}>
          <IndexRoute component={Search} />
          <Route path="info(/:moduleName)" component={Info} />
          <Route path="profile" component={Profile} onEnter={requireAuth} />
          <Route path="auth">
            <Route path="login" component={Login} />
            <Route path="reset">
              <IndexRoute component={ResetPassword} />
              <Route path="(:token)" component={ChangePassword} />
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}
