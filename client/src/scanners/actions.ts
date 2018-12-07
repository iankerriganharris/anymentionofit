import * as types from './types'
import { IScannersRequest, IScannersSuccess, IScannersError } from 'anymentionofit/scanners'
import { Dispatch } from 'redux'
import * as api from './api'

// actions
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
    const scanners = await api.getScanners()
    return dispatch(fetchScannersSuccess(scanners))
  } catch (error) {
    return dispatch(fetchScannersError())
  }
}
