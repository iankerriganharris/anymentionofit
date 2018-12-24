import * as types from './types'
import {
  IScannersRequest,
  IScannersSuccess,
  IScannersError,
  IScannerRequest,
  IScannerSuccess,
  IScannerError
} from 'anymentionofit/scanners'
import { Dispatch, AnyAction } from 'redux'
import * as api from './api'
import { call, put } from 'redux-saga/effects'

// actions

/**
 * Fetch scanners
 */
export const fetchScannersRequest = (): IScannersRequest => ({
  type: types.FETCH_SCANNERS_REQUEST
})

export const fetchScannersSuccess = (scanners: object[]): IScannersSuccess => ({
  scanners,
  type: types.FETCH_SCANNERS_SUCCESS
})

export const fetchScannersError = (): IScannersError => ({
  type: types.FETCH_SCANNERS_ERROR
})

export const getScanners = () => ({
  type: 'GET_SCANNERS'
})

export function* fetchScanners() {
  yield put(fetchScannersRequest())

  try {
    const scanners = yield call(api.getScanners)
    yield put(fetchScannersSuccess(scanners))
  } catch (error) {
    yield put(fetchScannersError())
  }
}

/**
 * Fetch scanner by id
 */
export const fetchScannerByIdRequest = (): IScannerRequest => ({
  type: types.FETCH_SCANNER_BY_ID_REQUEST
})

export const fetchScannerByIdSuccess = (scanner: object): IScannerSuccess => ({
  scanner,
  type: types.FETCH_SCANNER_BY_ID_SUCCESS
})

export const fetchScannerByIdError = (): IScannerError => ({
  type: types.FETCH_SCANNER_BY_ID_ERROR
})

export const getScannerById = (id: string) => ({
  payload: id,
  type: 'GET_SCANNER_BY_ID'
})

export function* fetchScannerById({ payload: id }: AnyAction) {
  yield put(fetchScannerByIdRequest())

  try {
    const scanner = yield call(api.getScannerById, id)
    yield put(fetchScannerByIdSuccess(scanner))
  } catch (error) {
    yield put(fetchScannerByIdError())
  }
}

/**
 * Delete scanner by id
 */

export const deleteScannerByIdRequest = (id: string, push: Function) => ({
  push,
  payload: id,
  type: 'DELETE_SCANNER_BY_ID'
})

export const deleteScannerByIdSuccess = () => ({
  type: types.FETCH_SCANNER_BY_ID_SUCCESS
})

export function* deleteScannerById({ payload: id, push }: AnyAction) {
  console.log('deleting...')
  try {
    yield call(api.deleteScannerById, id)
    yield put(deleteScannerByIdSuccess())
    yield call(push, `/scanners/`)
  } catch (error) {
    console.log(error)
  }
}

export const createScannerSuccess = (scanner: object): IScannerSuccess => ({
  scanner,
  type: types.CREATE_SCANNER_SUCCESS
})

export const createScannerRequest = (data: object, push: Function) => ({
  data,
  push,
  type: 'CREATE_SCANNER'
})

export function* createScanner({ data, push }: AnyAction) {
  try {
    const scanner = yield call(api.postNewScanner, data)
    const { id } = scanner
    yield put(createScannerSuccess(scanner))
    yield call(push, `/scanners/${id}`)
  } catch (error) {
    console.log(error)
  }
}
