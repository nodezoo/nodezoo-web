'use strict'

import {
  INFO_REQUEST,
  INFO_RESPONSE
} from '../actions/info'

const infoState = {
  isGettingInfo: false,
  hasError: false,
  error: null
  result: null
}

export default function info (state = infoState, action) {
  switch (action.type) {
    case INFO_REQUEST:
      return Object.assign({}, state, {
        isGettingInfo: true,
        hasError: false,
        error: null
        result: null
      })

    case INFO_RESPONSE:
      return Object.assign({}, state, {
        isGettingInfo: false,
        hasError: action.hasError,
        error: action.error
        result: action.result
      })

    default:
      return state
  }
}
