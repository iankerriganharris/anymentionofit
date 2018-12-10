import * as React from 'react'
import { Result } from './Result'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { IResult } from 'anymentionofit/results'

interface IProps extends RouteComponentProps {
  data?: IResult
}

const ResultDetail: React.FunctionComponent<IProps> = (props: IProps) =>
  props.data ? (
    <>
      <div>{renderBreadcrums(props)}</div>
      <Result {...props.data} />
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
      <BreadcrumbItem tag={Link} to={`/scanners/${props.data.scan.scanner.id}`}>
        {props.data.scan.scanner.name}
      </BreadcrumbItem>
      <BreadcrumbItem tag={Link} to={`/scanners/${props.data.scan.scanner.id}/scans/${props.data.scan.id}`}>
        {props.data.scan.name}
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        {props.data.frequency.name}
      </BreadcrumbItem>
    </Breadcrumb>
  ) : null

export default ResultDetail
