// reducer
import * as types from './types'
import { IScannerAction, IScannerSuccessAction } from 'anymentionofit/scanners'

const initialState = {}

type Action = IScannerAction | IScannerSuccessAction

export default function reducer(state = initialState, action: Action) {
  console.log(action)
  switch (action.type) {
    case types.FETCH_SCANNERS_REQUEST:
      return {
        ...state,
        scannerList: {
          isFetching: true
        }
      }
    case types.FETCH_SCANNERS_ERROR:
      return {
        ...state
      }
    case types.FETCH_SCANNERS_SUCCESS:
      return {
        ...state,
        scannerList: {
          data: action.scanners,
          isFetching: false
        }
      }
    case types.FETCH_SCANNER_BY_ID_REQUEST:
      return {
        ...state,
        currentScanner: {
          isFetching: true
        }
      }
    case types.FETCH_SCANNER_BY_ID_ERROR:
      return {
        ...state
      }
    case types.FETCH_SCANNER_BY_ID_SUCCESS:
      return {
        ...state,
        currentScanner: {
          data: action.scanner,
          isFetching: false
        }
      }
    default:
      return state
  }
}
