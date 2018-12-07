import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { IScanner } from './interfaces'
import { Scanner } from './Scanner'

interface IState {}

interface IProps {
  scanners: IScanner[]
  fetchScanners: Function
}

class Scanners extends React.Component<IProps, IState> {
  componentWillMount() {
    const { fetchScanners } = this.props
    fetchScanners()
  }

  public render() {
    const { scanners } = this.props
    return <ListGroup>{renderScanners(scanners)}</ListGroup>
  }
}

export default Scanners

const renderScanners = (scanners: IScanner[]) =>
  scanners.map((scanner, i) => (
    <ListGroupItem key={i}>
      <Scanner {...scanner} />
    </ListGroupItem>
  ))
