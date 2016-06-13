require('./utils/test-dom')()

import mockery from 'mockery'
import { createMemoryHistory } from 'history'

mockery.enable({
  warnOnUnregistered: false,
  warnOnReplace: false
})

mockery.registerMock('../lib/auth', {
  getUserInfo: () => { return null }
})

mockery.registerMock('superagent/lib/client', {
})

mockery.registerMock('history', {
  createHistory: createMemoryHistory
})

exports.registerMock   = mockery.registerMock
exports.deregisterMock = mockery.deregisterMock

exports.store = null
exports.root  = null

export function start() {
  for (let m in require.cache) // TODO Delete cache of modified files only
    if (m.indexOf('node_modules') < 0)
      delete require.cache[m]

  let createRootReducer   = require('../client/bootstrap/create-root-reducer'  ).default
  let configureStore      = require('../client/bootstrap/configure-store'      ).default
  let createRootComponent = require('../client/bootstrap/create-root-component').default

  let store = configureStore()(createRootReducer(), {})
  let root  = createRootComponent(store)

  exports.store = store
  exports.root  = root
}
