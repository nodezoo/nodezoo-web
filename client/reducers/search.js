'use strict'

import * as searchActions from '../constants/search'

const searchState = {
  isSearching: false,
  hasError: false,
  error: null,
  result: null
}

export default function info (state = searchState, action) {
  switch (action.type) {
    case searchActions.SEARCH_REQUEST:
      return Object.assign({}, state, {
        isSearching: true,
        hasError: false,
        error: null,
        result: null
      })

    case searchActions.SEARCH_RESPONSE:
      return Object.assign({}, state, {
        isSearching: false,
        hasError: action.hasError,
        error: action.error,
        result: action.result
      })

    default:
      return state
  }
}
