import * as React from 'react'
import { Result } from './Result'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { IResult } from 'anymentionofit/results'

interface IProps extends RouteComponentProps {
  data?: IResult
}

const ResultDetail: React.FunctionComponent<IProps> = (props: IProps) => (props.data ? <Result {...props.data} /> : null)

export default ResultDetail
