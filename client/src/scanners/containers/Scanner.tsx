import React from 'react'
import { connect } from 'react-redux'
import { fetchScannerById } from '../actions'
import ScannerDetail from '../components/ScannerDetail'
import { IScanner } from 'anymentionofit/scanners'

interface IProps {
  scanner: IScanner
  isFetching: boolean
  fetchScannerById: Function
}

interface IState {
  scanners: {
    scannerList: {
      data: IScanner[]
      isFetching: boolean
    }
    currentScanner: {
      data: IScanner
      isFetching: boolean
    }
  }
}

const container = (props: IProps) => <ScannerDetail {...props} />

const mapStateToProps = (state: IState) => {
  console.log(state)
  return {
    fetchScannerById,
    ...state.scanners.currentScanner
  }
}

export default connect(
  mapStateToProps,
  {
    fetchScannerById
  }
)(container)
