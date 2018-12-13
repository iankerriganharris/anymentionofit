import React from 'react'
import { connect } from 'react-redux'
import { getResultById } from '../actions'
import ResultDetail from '../components/ResultDetail'
import { RouteComponentProps, withRouter } from 'react-router'
import { BreadcrumbItem, Breadcrumb } from 'reactstrap'
import { Link } from 'react-router-dom'

interface MatchParams {
  id: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  getResultById: Function
  data: any
  isFetching: boolean
}

interface IState {
  results: {
    currentResult: any
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
    return !this.props.isFetching ? <ResultDetail {...this.props} /> : null
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
