import { all } from 'redux-saga/effects'
import { scannerSagas } from '../scanners'

export default function* rootSaga() {
  yield all([...scannerSagas])
}
