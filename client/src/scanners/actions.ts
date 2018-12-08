import * as types from './types'
import {
  IScannersRequest,
  IScannersSuccess,
  IScannersError,
  IScannerRequest,
  IScannerSuccess,
  IScannerError
} from 'anymentionofit/scanners'
import { Dispatch } from 'redux'
import * as api from './api'

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

export const fetchScanners = () => async (dispatch: Dispatch) => {
  console.log('dispatching...')
  dispatch(fetchScannersRequest())

  try {
    const scanners = await api.getScanners()
    return dispatch(fetchScannersSuccess(scanners))
  } catch (error) {
    return dispatch(fetchScannersError())
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

export const fetchScannerById = (id: number) => async (dispatch: Dispatch) => {
  console.log('dispatching by id...')
  dispatch(fetchScannerByIdRequest())

  try {
    const scanner = await api.getScannerById(id)
    return dispatch(fetchScannerByIdSuccess(scanner))
  } catch (error) {
    return dispatch(fetchScannerByIdError())
  }
}
