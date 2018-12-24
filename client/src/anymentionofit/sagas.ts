import { all } from 'redux-saga/effects'
import { scannerSagas } from '../scanners'
import { scanSagas } from '../scans'
import { resultSagas } from '../results'
import { startStopChannel } from '../notifications/actions'

export default function* rootSaga() {
  yield all([startStopChannel(), ...scannerSagas, ...scanSagas, ...resultSagas])
}
