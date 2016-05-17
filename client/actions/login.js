
'use strict'

import Request from 'superagent/lib/client'
import * as Auth from '../lib/auth'
import * as loginActions from '../constants/login'

export function login (username, password) {
  return (dispatch) => {
    Auth.doLogin(username, password, (response) => {
      dispatch({
        type: loginActions.UPDATE_LOGIN_STATE,
        isLoggedIn: response.isLoggedIn,
        userName: response.userName,
        hasError: response.hasError,
        errorMessage: response.errorMessage
      })
    })
  }
}
