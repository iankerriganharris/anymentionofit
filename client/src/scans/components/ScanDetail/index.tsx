import * as React from 'react'
import { Scan } from './Scan'
import { IScan } from 'anymentionofit/scans'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

interface IProps extends RouteComponentProps {
  data?: IScan
}

const ScanDetail: React.FunctionComponent<IProps> = (props: IProps) =>
  props.data ? (
    <>
      <div>{renderBreadcrums(props)}</div>
      <Scan {...props.data} />
    </>
  ) : (
    <div />
  )

/**
 * TODO: Maket this a common component. Generate breadcrumbs dynamically.
 * Link: https://github.com/icd2k3/react-router-breadcrumbs-hoc
 */
const renderBreadcrums = (props: IProps) =>
  props.data ? (
    <Breadcrumb>
      <BreadcrumbItem tag={Link} to={`/scanners/${props.data.scanner.id}`}>
        {props.data.scanner.name}
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        {props.data.name}
      </BreadcrumbItem>
    </Breadcrumb>
  ) : null

export default ScanDetail
