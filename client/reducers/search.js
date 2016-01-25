'use strict'

import * as searchActions from '../constants/search'

const searchState = {
  isSearching: false,
  query: null,
  hasError: false,
  error: null,
  result: null
}

export default function info (state = searchState, action) {
  switch (action.type) {
    case searchActions.SEARCH_REQUEST:
      return Object.assign({}, state, {
        isSearching: true,
        query: action.query,
        hasError: false,
        error: null,
        result: null
      })

    case searchActions.SEARCH_RESPONSE:
      return Object.assign({}, state, {
        isSearching: false,
        query: action.query,
        hasError: action.hasError,
        error: action.error,
        result: action.result
      })

    default:
      return state
  }
}
