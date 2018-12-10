import { takeEvery } from 'redux-saga/effects'
import { fetchScanById } from './actions'

export default [takeEvery('GET_SCAN_BY_ID', fetchScanById)]
