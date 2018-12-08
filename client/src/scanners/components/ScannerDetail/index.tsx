import * as React from 'react'
import { IScanner } from 'anymentionofit/scanners'
import { Scanner } from './Scanner'

interface IProps {
  data?: IScanner | undefined
}

const ScannerDetail = ({ data }: IProps) => (data ? <Scanner {...data} /> : <div />)

export default ScannerDetail
