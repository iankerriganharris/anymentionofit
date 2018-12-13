// reducer
import * as types from './types'
import { IResultSuccessAction } from 'anymentionofit/results'
import { AnyAction } from 'redux'

const initialState = {}

type Action = IResultSuccessAction | AnyAction

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_RESULT_BY_ID':
      return {
        ...state,
        currentResult: {
          isFetching: true
        }
      }
    case types.FETCH_RESULT_BY_ID_SUCCESS:
      return {
        ...state,
        currentResult: {
          data: action.result,
          isFetching: false
        }
      }
    default:
      return state
  }
}
