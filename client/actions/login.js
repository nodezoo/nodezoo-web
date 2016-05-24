'use strict'

import * as loginActions from '../constants/login'

export function updateLoginState(userInfo) {
  return (dispatch) => {
    dispatch({
      type: loginActions.UPDATE_LOGIN_STATE,
      userInfo: userInfo
    })
  }
}
