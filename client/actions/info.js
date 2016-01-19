'use strict'

import Request from 'superagent/lib/client'
import { pushPath } from 'redux-simple-router'

export const INFO_REQUEST = 'INFO_REQUEST'
export const INFO_RESPONSE = 'INFO_RESPONSE'

export function getInfo (moduleName) {
  return (dispatch) => {
    dispatch({type: INFO_REQUEST})

    if(moduleName) {
      Request
        .get(('/api/info/' + moduleName))
        .end((err, resp) => {
          if (err) {
            dispatch({
              type: INFO_RESPONSE,
              hasError: true,
              error: err,
              result: null
            })
          }
          else {
            dispatch({
              type: INFO_RESPONSE,
              hasError: false,
              error: null,
              result: resp.body
            })
          }
        })
    } else {
      dispatch(pushPath('/'))
    }
  }
}

