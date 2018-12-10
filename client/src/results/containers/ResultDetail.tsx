import React from 'react'
import { connect } from 'react-redux'
import { getResultById } from '../actions'
import ResultDetail from '../components/ResultDetail'
import { RouteComponentProps, withRouter } from 'react-router'

interface MatchParams {
  id: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  getResultById: Function
}

interface IState {
  results: {
    currentResult: object
  }
}

class ResultDetailContainer extends React.Component<IProps, object> {
  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getResultById(id)
  }

  render() {
    return <ResultDetail {...this.props} />
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.results.currentResult
  }
}

export default connect(
  mapStateToProps,
  { getResultById }
)(ResultDetailContainer)
