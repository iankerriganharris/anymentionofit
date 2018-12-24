import React, { ReactPropTypes, Dispatch } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { getScanners } from '../actions'
import Scanners from '../components/ScannersList'
import { IScanner } from 'anymentionofit/scanners'

interface IProps {
  data?: IScanner[] | undefined
  isFetching?: boolean | undefined
  getScanners: Function
}

interface IState {
  scanners: {
    scannerList: {
      data: IScanner[]
      isFetching: boolean
    }
  }
}

class ScannersList extends React.Component<IProps, object> {
  componentDidMount() {
    this.props.getScanners()
  }
  render() {
    return <Scanners {...this.props} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.scanners.scannerList
  }
}

export default connect(
  mapStateToProps,
  { getScanners }
)(ScannersList)
