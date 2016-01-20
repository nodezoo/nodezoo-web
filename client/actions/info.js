'use strict'

import Request from 'superagent/lib/client'
import { pushPath } from 'redux-simple-router'

import * as infoActions from '../constants/info'

export function getInfo (moduleName) {
  return (dispatch) => {
    dispatch({type: infoActions.INFO_REQUEST})

    if (!moduleName) {
      return dispatch(pushPath('/'))
    }

    Request
      .get(('/api/info/' + moduleName))
      .end((err, resp) => {
        if (err) {
          dispatch({
            type: infoActions.INFO_RESPONSE,
            hasError: true,
            error: err,
            result: null
          })
        }
        else {
          dispatch({
            type: infoActions.INFO_RESPONSE,
            hasError: false,
            error: null,
            result: resp.body
          })
        }
      })
  }
}

