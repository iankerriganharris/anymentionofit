import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Scanner, IScanner } from './scanner'

interface IState {}

interface IProps {}

class ScannersPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  public componentDidMount() {
    
  }

  public render() {
    return <ListGroup>{renderScanners()}</ListGroup>
  }
}

const renderScanners = (scanners: IScanner[]) =>
  scanners.map((scanner, i) => (
    <ListGroupItem key={i}>
      <Scanner {...scanner} />
    </ListGroupItem>
  ))
