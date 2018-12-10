import { takeEvery } from 'redux-saga/effects'
import { fetchResultById } from './actions'

export default [takeEvery('GET_RESULT_BY_ID', fetchResultById)]
