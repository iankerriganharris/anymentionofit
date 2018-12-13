import * as React from 'react'
import { Scan } from './Scan'
import { IScan } from 'anymentionofit/scans'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

interface IProps extends RouteComponentProps {
  data?: IScan
}

const ScanDetail: React.FunctionComponent<IProps> = (props: IProps) => (props.data ? <Scan {...props.data} /> : null)

export default ScanDetail
