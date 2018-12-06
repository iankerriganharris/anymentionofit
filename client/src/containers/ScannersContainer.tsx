import React from 'react'
import { connect } from 'react-redux'
import { fetchScanners } from '../actions/ScannerActions'
import Scanners from '../components/ScannersList'
import { IScanner } from '../components/ScannersList/interfaces'

interface IProps {
  scanners: IScanner[]
  isFetching: boolean
  fetchScanners: Function
}

interface IState {
  scanners: {
    data: IScanner[]
    isFetching: boolean
    fetchScanners: Function
  }
}

const ScannersContainer = (props: IProps) => <Scanners {...props} />

const mapStateToProps = (state: IState) => {
  return {
    fetchScanners,
    isFetching: state.scanners.isFetching,
    scanners: state.scanners.data
  }
}

export default connect(
  mapStateToProps,
  {
    fetchScanners
  }
)(ScannersContainer)
