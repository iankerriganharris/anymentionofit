import * as types from '../constants'
import * as external from '../external'
import { Dispatch } from 'redux'
import { IScannersRequest, IScannersSuccess, IScannersError } from './interfaces'

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
  dispatch(fetchScannersRequest())

  try {
    const scanners = await external.getScanners()
    return dispatch(fetchScannersSuccess(scanners))
  } catch (error) {
    return dispatch(fetchScannersError())
  }
}
