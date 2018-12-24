import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PureScannerBreadcrumb from '../components/Breadcrumb'

const mapStateToProps = (state: any) => {
  return {
    scannerName: _.get(state.scanners, 'currentScanner.data.name')
  }
}

export default connect(mapStateToProps)(PureScannerBreadcrumb)
