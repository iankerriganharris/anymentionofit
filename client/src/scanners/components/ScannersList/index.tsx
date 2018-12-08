import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { IScanner } from 'anymentionofit/scanners'
import { Scanner } from './Scanner'

interface IState {}

interface IProps {
  data?: IScanner[] | undefined
  fetchScanners: Function
}

class Scanners extends React.Component<IProps, IState> {
  componentDidMount() {
    const { fetchScanners } = this.props
    fetchScanners()
  }

  public render() {
    const { data } = this.props
    return data ? <ListGroup>{renderScanners(data)}</ListGroup> : <div />
  }
}

export default Scanners

const renderScanners = (scanners: IScanner[]) =>
  scanners.map((scanner, i) => (
    <ListGroupItem key={i}>
      <Scanner {...scanner} />
    </ListGroupItem>
  ))
