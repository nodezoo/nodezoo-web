
'use strict'

import Request from 'superagent/lib/client'

import * as loginActions from '../constants/login'

export function login (username, password) {
  return (dispatch) => {
    Request
      .post('/auth/login')
      .send({ username: username, password: password })
      .end((err, resp) => {
        if (err) {
          dispatch({
            type: loginActions.UPDATE_LOGIN_STATE,
            isLoggedIn: false,
            userName: null,
            hasError: true,
            errorMessage: err.message
          })
        }
        else {
          dispatch({
            type: loginActions.UPDATE_LOGIN_STATE,
            isLoggedIn: resp.body.isLoggedIn,
            userName: resp.body.userName,
            hasError: resp.body.hasError,
            errorMessage: resp.body.errorMessage
          })
        }
      })
  }
}

