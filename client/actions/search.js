
'use strict'

import Request from 'superagent/lib/client'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE'

export function search (query) {
  return (dispatch) => {
    dispatch({type: SEARCH_REQUEST})

    Request
      .get('/api/query')
      .query({q: query})
      .end((err, resp) => {
        if (err) {
          dispatch({
            type: SEARCH_RESPONSE,
            hasError: true,
            err: err,
            result: null
          })
        }
        else {
          dispatch({
            type: SEARCH_RESPONSE,
            hasError: false,
            err: null,
            result: resp.body.items
          })
        }
      })
    }
  }
