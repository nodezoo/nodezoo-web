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

export default function createRootComponent (store) {
  // Sets react router up so that it uses browser
  // history, enables client side routing
  const history = createHistory()

  // Binds redux and react router so
  // that state is shared between both.
  syncReduxAndRouter(history, store)

  // This is our root component, it's a set of routes
  // composed together with our redux store, the Provider
  // component handles passing our state to the router.
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Shell}>
          <IndexRoute component={Search} />
          <Route path="info(/:moduleName)" component={Info}/>
        </Route>
      </Router>
    </Provider>
  )
}
