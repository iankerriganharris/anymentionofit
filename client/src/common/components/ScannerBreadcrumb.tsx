import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const PureScannerBreadcrumb = ({ scannerName }: any) => <span>{scannerName}</span>

const mapStateToProps = (state: any) => {
  return {
    scannerName: _.get(state.scanners, 'currentScanner.data.name')
  }
}

export default connect(mapStateToProps)(PureScannerBreadcrumb)
