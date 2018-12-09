import { takeEvery } from 'redux-saga/effects'
import { fetchScanners, fetchScannerById, createScanner } from './actions'

export default [
  takeEvery('GET_SCANNERS', fetchScanners),
  takeEvery('GET_SCANNER_BY_ID', fetchScannerById),
  takeEvery('CREATE_SCANNER', createScanner)
]
