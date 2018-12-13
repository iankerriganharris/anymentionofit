import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PureResultBreadcrumb from '../components/Breadcrumb'

const mapStateToProps = (state: any) => {
  return {
    topicName: _.get(state.results, 'currentResult.data.topic.name'),
    frequencyName: _.get(state.results, 'currentResult.data.frequency.name')
  }
}

export default connect(mapStateToProps)(PureResultBreadcrumb)
