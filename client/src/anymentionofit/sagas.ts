import { all } from 'redux-saga/effects'
import { scannerSagas } from '../scanners'
import { scanSagas } from '../scans'
import { resultSagas } from '../results'

export default function* rootSaga() {
  yield all([...scannerSagas, ...scanSagas, ...resultSagas])
}
