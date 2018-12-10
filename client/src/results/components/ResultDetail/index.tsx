import * as React from 'react'
import { Result } from './Result'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

interface IProps extends RouteComponentProps {}

const ResultDetail: React.FunctionComponent<IProps> = (props: IProps) => <Result />

/**
 * TODO: Maket this a common component. Generate breadcrumbs dynamically.
 * Link: https://github.com/icd2k3/react-router-breadcrumbs-hoc
 */
// const renderBreadcrums = (props: IProps) =>
//   props.data ? (
//     <Breadcrumb>
//       <BreadcrumbItem tag={Link} to={`/scanners/${props.data.scanner.id}`}>
//         {props.data.scanner.name}
//       </BreadcrumbItem>
//       <BreadcrumbItem active tag="span">
//         {props.data.name}
//       </BreadcrumbItem>
//     </Breadcrumb>
//   ) : null

export default ResultDetail
