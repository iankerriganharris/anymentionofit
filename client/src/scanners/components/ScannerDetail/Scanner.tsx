import * as React from 'react'
import { Link } from 'react-router-dom'
import { IScanner } from 'anymentionofit/scanners'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { LogoSwitch } from '../../../common/components'

interface IProps extends IScanner {}

export const Scanner: React.SFC<IProps> = (props: IScanner) => (
  <div>
    <h3>{props.name}</h3>
    {renderFrequencies(props.frequencies)}
    <ListGroup>{renderScans(props.scans)}</ListGroup>
  </div>
)

const renderFrequencies = (frequencies: IScanner['frequencies']) =>
  frequencies.map((f, i) => <LogoSwitch key={i} size="2em" company={f.name} />)

const renderScans = (scans: IScanner['scans']) =>
  scans.map((s, i) => (
    <ListGroupItem key={i}>
      <Link to={`scans/${s.id}`}>{s.name}</Link>
    </ListGroupItem>
  ))
