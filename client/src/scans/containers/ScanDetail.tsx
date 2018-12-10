import React from 'react'
import { connect } from 'react-redux'
import { getScanById } from '../actions'
import ScanDetail from '../components/ScanDetail'
import { RouteComponentProps, withRouter } from 'react-router'

interface MatchParams {
  id: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  getScanById: Function
}

interface IState {
  scans: {
    currentScan: object
  }
}

class ScanDetailContainer extends React.Component<IProps, object> {
  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getScanById(id)
  }

  render() {
    return <ScanDetail {...this.props} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.scans.currentScan
  }
}

export default connect(
  mapStateToProps,
  { getScanById }
)(ScanDetailContainer)
