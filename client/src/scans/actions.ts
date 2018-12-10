import * as types from './types'
import { IScanSuccess } from 'anymentionofit/scans'
import { AnyAction } from 'redux'
import * as api from './api'
import { call, put } from 'redux-saga/effects'

// actions

/**
 * Fetch scanner by id
 */

export const fetchScanByIdSuccess = (scan: object): IScanSuccess => ({
  scan,
  type: types.FETCH_SCAN_BY_ID_SUCCESS
})

export const getScanById = (id: string) => ({
  payload: id,
  type: 'GET_SCAN_BY_ID'
})

export function* fetchScanById({ payload: id }: AnyAction) {
  try {
    const scan = yield call(api.getScanById, id)
    yield put(fetchScanByIdSuccess(scan))
  } catch (error) {
    console.log(error)
  }
}
