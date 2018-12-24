import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PureScanBreadcrumb from '../components/Breadcrumb'

const mapStateToProps = (state: any) => {
  return {
    scanName: _.get(state.scans, 'currentScan.data.name')
  }
}

export default connect(mapStateToProps)(PureScanBreadcrumb)
