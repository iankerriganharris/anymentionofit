// reducer
import * as types from './types'
import { IScannerAction, IScannerSuccessAction } from 'anymentionofit/scanners'

const initialState = {}

type Action = IScannerAction | IScannerSuccessAction

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.FETCH_SCANNERS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_SCANNERS_ERROR:
      return {
        ...state
      }
    case types.FETCH_SCANNERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.scanners
      }
    default:
      return state
  }
}
