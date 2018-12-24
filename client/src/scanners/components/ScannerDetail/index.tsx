import * as React from 'react'
import { IScanner } from 'anymentionofit/scanners'
import { Scans } from './Scans'
import { LogoSwitch } from '../../../common/components'
import { Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap'

interface IProps {
  data: IScanner
  handleDelete: Function
}

class ScannerDetail extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
    this.state = { collapse: false }
  }

  toggle = () => this.setState({ collapse: !this.state.collapse })

  render() {
    const { data, handleDelete } = this.props
    return (
      <>
        <Row className="mb-1">
          <Col className="text-right">
            {data.frequencies ? renderFrequencies(data.frequencies) : null}
          </Col>
          <Col md={2} className="text-right">
            <Button color="info" onClick={this.toggle}>
              Settings
            </Button>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <ScannerToolbox
              collapse={this.state.collapse}
              handleDelete={handleDelete}
            />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Scans {...data} />
          </Col>
        </Row>
      </>
    )
  }
}

const renderFrequencies = (frequencies: IScanner['frequencies']) =>
  frequencies.map((f, i) => <LogoSwitch key={i} size="2em" company={f.name} />)

const ScannerToolbox = (props: any) => {
  return (
    <Collapse isOpen={props.collapse}>
      <Card>
        <CardBody>
          <Button color="danger" onClick={props.handleDelete}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </Collapse>
  )
}

export default ScannerDetail
