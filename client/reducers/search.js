'use strict'

import {
  SEARCH_REQUEST,
  SEARCH_RESPONSE
} from '../actions/search'

const searchState = {
  isSearching: false,
  hasError: false,
  error: null,
  result: null
}

export default function info (state = searchState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return Object.assign({}, state, {
        isSearching: true,
        hasError: false,
        error: null,
        result: null
      })

    case SEARCH_RESPONSE:
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
