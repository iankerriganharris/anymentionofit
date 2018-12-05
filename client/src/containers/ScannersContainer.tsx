import React from 'react'
import { connect } from 'react-redux'
import { fetchScanners } from '../actions/ScannerActions'
import Scanners from '../components/ScannersList'
import { IScanner } from '../components/ScannersList/interfaces'

interface IProps {
  scanners: IScanner[]
  fetchScanners: Function
}

interface IState {}

const ScannersContainer = (props: IProps) => <Scanners {...props} />

const mapStateToProps = (state: IState) => {
  return {}
}

export default connect(
  mapStateToProps,
  {
    fetchScanners
  }
)(ScannersContainer)
