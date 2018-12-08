import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ScannerDetailContainer, ScannerListContainer } from './containers'
import { RouteComponentProps } from 'react-router'

const routes = ({ match }: RouteComponentProps) => (
  <div>
    <Switch>
      <Route exact path={`${match.path}`} component={ScannerListContainer} />
      <Route path={`${match.path}/:id`} component={ScannerDetailContainer} />
    </Switch>
  </div>
)

export default routes
