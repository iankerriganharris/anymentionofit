// reducer
import * as types from './types'
import { IResultSuccessAction } from 'anymentionofit/results'

const initialState = {}

type Action = IResultSuccessAction

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
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
