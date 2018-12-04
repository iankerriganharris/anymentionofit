import * as React from 'react'

export interface IScanner {
  name: string
}

interface IProps extends IScanner {}

export const Scanner: React.SFC<IProps> = (props: IProps) => <div>{props.name}</div>
