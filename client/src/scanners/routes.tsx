import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ScannerDetailContainer, ScannerListContainer, ScannerFormContainer } from './containers'
import { default as CreateScannerButton } from './components/ScannerCreate/NewButton'
import { RouteComponentProps } from 'react-router'
import { Row, Col } from 'reactstrap'

const routes = ({ match }: RouteComponentProps) => {
  console.log(match.path)
  return (
    <Row>
      <Col>
        <Route exact path={`${match.path}`} component={CreateScannerButton} />
        <Switch>
          <Route exact path={`${match.path}`} component={ScannerListContainer} />
          <Route exact path={`${match.path}/new`} component={ScannerFormContainer} />
          <Route exact path={`${match.path}/:id`} component={ScannerDetailContainer} />
        </Switch>
      </Col>
    </Row>
  )
}

export default routes
