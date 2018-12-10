import { combineReducers } from 'redux'
import scanners from '../scanners'
import scans from '../scans'
import results from '../results'

export default combineReducers({
  scanners,
  scans,
  results
})
