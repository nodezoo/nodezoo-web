'use strict'

import * as loginActions from '../constants/login'

const loginState = {
  isLoggedIn: isLoggedIn(),
  userName: getLoggedInUserName(),
  hasError: false,
  errorMessage: null
}

function isLoggedIn() {
  // TODO Get the current state

  return false
}

function getLoggedInUserName() {
  // TODO Get the current logged in user name

  return null
}

export default function info (state = loginState, action) {
  switch (action.type) {
    case loginActions.UPDATE_LOGIN_STATE:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn,
        userName: action.userName,
        hasError: action.hasError,
        errorMessage: action.errorMessage
      })

    default:
      return state
  }
}
