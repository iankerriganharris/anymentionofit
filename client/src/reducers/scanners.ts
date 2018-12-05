import * as types from '../constants'

const initialState = {}

interface ScannerAction {
  type: 'FETCH_SCANNERS_REQUEST' | 'FETCH_SCANNERS_ERROR'
}

interface ScannerSuccessAction {
  type: 'FETCH_SCANNERS_SUCCESS'
  scanners: object[]
}

type Action = ScannerAction | ScannerSuccessAction

export default function scanners(state = initialState, action: Action) {
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
        scanners: action.scanners
      }
    default:
      return state
  }
}
