import * as React from 'react'
import { Link } from 'react-router-dom'
import { IScanner } from 'anymentionofit/scanners'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'
import { LogoSwitch } from '../../../common/components'

interface IProps extends IScanner {}

export const Scans: React.SFC<IProps> = (props: IScanner) => (
  <ListGroup>{renderScans(props.scans)}</ListGroup>
)

const renderScans = (scans: IScanner['scans']) =>
  scans.map((s, i) => (
    <ListGroupItem key={i}>
      <Link to={`scans/${s.id}`}>{s.name}</Link>
    </ListGroupItem>
  ))
