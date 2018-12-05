import * as React from 'react'
import { IScanner } from './interfaces'

interface IProps extends IScanner {}

export const Scanner: React.SFC<IProps> = (props: IProps) => <div>{props.name}</div>
