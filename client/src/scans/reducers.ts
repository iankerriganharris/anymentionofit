// reducer
import * as types from './types'
import { IScanSuccessAction } from 'anymentionofit/scans'

const initialState = {}

type Action = IScanSuccessAction

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.FETCH_SCAN_BY_ID_SUCCESS:
      return {
        ...state,
        currentScan: {
          data: action.scan,
          isFetching: false
        }
      }
    default:
      return state
  }
}
