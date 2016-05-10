'use strict'

import {combineReducers} from 'redux'

import {routeReducer} from 'redux-simple-router'
import searchReducer from '../reducers/search'
import infoReducer from '../reducers/info'
import loginReducer from '../reducers/login'

export default function createRootReducer () {
  return combineReducers({
    routing: routeReducer,
    search: searchReducer,
    info: infoReducer,
    login: loginReducer
  })
}
