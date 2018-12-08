import React from 'react'
import { connect } from 'react-redux'
import { fetchScanners } from '../actions'
import Scanners from '../components/ScannersList'
import { IScanner } from 'anymentionofit/scanners'

interface IProps {
  scanners?: IScanner[] | undefined
  isFetching?: boolean | undefined
  fetchScanners: Function
}

interface IState {
  scanners: {
    scannerList: {
      data: IScanner[]
      isFetching: boolean
    }
  }
}

const container = (props: IProps) => <Scanners {...props} />

const mapStateToProps = (state: IState) => {
  console.log(state)
  return {
    fetchScanners,
    ...state.scanners.scannerList
  }
}

export default connect(
  mapStateToProps,
  {
    fetchScanners
  }
)(container)
