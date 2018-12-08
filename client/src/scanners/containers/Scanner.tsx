import React from 'react'
import { connect } from 'react-redux'
import { fetchScannerById } from '../actions'
import ScannerDetail from '../components/ScannerDetail'
import { IScanner } from 'anymentionofit/scanners'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
  id: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  data: IScanner
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

class AsyncScanner extends React.Component<IProps, object> {
  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchScannerById(id)
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params
      this.props.fetchScannerById(id)
    }
  }

  render() {
    return <ScannerDetail {...this.props} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.scanners.currentScanner
  }
}

export default connect(
  mapStateToProps,
  { fetchScannerById }
)(AsyncScanner)
