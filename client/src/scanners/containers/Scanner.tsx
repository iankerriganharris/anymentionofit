import React from 'react'
import { connect } from 'react-redux'
import { getScannerById, deleteScannerByIdRequest } from '../actions'
import ScannerDetail from '../components/ScannerDetail'
import { IScanner } from 'anymentionofit/scanners'
import { RouteComponentProps } from 'react-router'
import Spinner from 'react-spinkit'

interface MatchParams {
  id: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  data: IScanner
  isFetching: boolean
  getScannerById: Function
  deleteScannerByIdRequest: Function
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
    this.props.getScannerById(id)
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params
      this.props.getScannerById(id)
    }
  }

  handleDelete = () =>
    this.props.deleteScannerByIdRequest(
      this.props.match.params.id,
      this.props.history.push
    )

  render() {
    return this.props.isFetching || !this.props.data ? (
      <Spinner name="circle" color="coral" />
    ) : (
      <ScannerDetail {...this.props} handleDelete={this.handleDelete} />
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.scanners.currentScanner
  }
}

export default connect(
  mapStateToProps,
  { getScannerById, deleteScannerByIdRequest }
)(AsyncScanner)
