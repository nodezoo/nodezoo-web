'use strict'

// Redux provides some bits to enable us to build
// a composed store that includes arbitary middleware.
import {createStore, applyMiddleware} from 'redux'

// Allows async dispatch in redux.
import thunkMiddleware from 'redux-thunk'

// Gives us pretty logs in the browser console.
import loggerMiddleware from 'redux-logger'

// Compose our middleware into our store
// and return the new store builder.
export default function configureStore () {
  return applyMiddleware(
    thunkMiddleware,
    loggerMiddleware()
  )(createStore)
}
