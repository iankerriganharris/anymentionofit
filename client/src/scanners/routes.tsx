import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ScannerDetailContainer, ScannerListContainer, ScannerFormContainer } from './containers'
import { default as CreateScannerButton } from './components/ScannerCreate/NewButton'
import { RouteComponentProps } from 'react-router'

const routes = ({ match }: RouteComponentProps) => (
  <div>
    <Route exact path={`${match.path}`} component={CreateScannerButton} />
    <Switch>
      <Route exact path={`${match.path}`} component={ScannerListContainer} />
      <Route exact path={`${match.path}/new`} component={ScannerFormContainer} />
      <Route path={`${match.path}/:id`} component={ScannerDetailContainer} />
    </Switch>
  </div>
)

export default routes
