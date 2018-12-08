import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { IScanner } from 'anymentionofit/scanners'
import { Scanner } from './Scanner'

interface IProps {
  data?: IScanner[] | undefined
}

const Scanners = (props: IProps) => <ListGroup>{props.data ? renderScanners(props.data) : null}</ListGroup>

export default Scanners

const renderScanners = (scanners: IScanner[]) =>
  scanners.map((scanner, i) => (
    <ListGroupItem key={i}>
      <Scanner {...scanner} />
    </ListGroupItem>
  ))
