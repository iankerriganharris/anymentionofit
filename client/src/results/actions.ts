import * as types from './types'
import { IResultSuccess } from 'anymentionofit/results'
import { AnyAction } from 'redux'
import * as api from './api'
import { call, put } from 'redux-saga/effects'

// actions

/**
 * Fetch scanner by id
 */

export const fetchResultByIdSuccess = (result: object): IResultSuccess => ({
  result,
  type: types.FETCH_RESULT_BY_ID_SUCCESS
})

export const getResultById = (id: string) => ({
  payload: id,
  type: 'GET_RESULT_BY_ID'
})

export function* fetchResultById({ payload: id }: AnyAction) {
  try {
    const result = yield call(api.getResultById, id)
    yield put(fetchResultByIdSuccess(result))
  } catch (error) {
    console.log(error)
  }
}
