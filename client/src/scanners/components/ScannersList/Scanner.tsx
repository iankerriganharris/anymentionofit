import * as React from 'react'
import { Link } from 'react-router-dom'
import { IScanner } from 'anymentionofit/scanners'

interface IProps extends IScanner {}

export const Scanner: React.SFC<IProps> = (props: IProps) => (
  <div>
    <Link to={`${props.id}`}>{props.name}</Link>
  </div>
)
