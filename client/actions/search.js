
'use strict'

import Request from 'superagent/lib/client'

import * as searchActions from '../constants/search'

export function search (query) {
  return (dispatch) => {
    dispatch({type: searchActions.SEARCH_REQUEST})

    Request
      .get('/api/query')
      .query({q: query})
      .end((err, resp) => {
        if (err) {
          dispatch({
            type: searchActions.SEARCH_RESPONSE,
            hasError: true,
            err: err,
            result: null
          })
        }
        else {
          dispatch({
            type: searchActions.SEARCH_RESPONSE,
            hasError: false,
            err: null,
            result: resp.body.items
          })
        }
      })
    }
  }
