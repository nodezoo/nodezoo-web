'use strict'

import * as loginActions from '../constants/login'
import { getUserInfo } from '../lib/auth'

const loginState = {
  userInfo: getUserInfo()
}

export default function login (state = loginState, action) {
  switch (action.type) {
    case loginActions.UPDATE_LOGIN_STATE:
      return Object.assign({}, state, {
        userInfo: action.userInfo
      })

    default:
      return state
  }
}
