import * as React from 'react'
import { Link } from 'react-router-dom'
import { IScanner } from 'anymentionofit/scanners'

interface IProps extends IScanner {}

export const Scanner: React.SFC<IProps> = (props: IScanner) => (
  <div>
    <div>{props.id}</div>
    <div>{props.name}</div>
    {renderFrequencies(props.frequencies)}
  </div>
)

const renderFrequencies = (frequencies: IScanner['frequencies']) => frequencies.map((f, i) => <div key={i}>{f.name}</div>)
