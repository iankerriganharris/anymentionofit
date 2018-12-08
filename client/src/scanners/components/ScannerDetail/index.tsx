import * as React from 'react'
import { IScanner } from 'anymentionofit/scanners'
import { Scanner } from './Scanner'

interface IState {}

interface IProps {
  data?: IScanner | undefined
  fetchScannerById: Function
}

class ScannerDetail extends React.Component<IProps, IState> {
  componentDidMount() {
    const { fetchScannerById } = this.props
    fetchScannerById(6)
  }

  public render() {
    const { data } = this.props
    return data ? <Scanner {...data} /> : <div />
  }
}

export default ScannerDetail
