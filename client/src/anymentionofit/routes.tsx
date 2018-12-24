import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ScannersRoutes } from '../scanners'
import { ScansRoutes } from '../scans'
import { ResultsRoutes } from '../results'
import Breadcrumbs from '../common/components/Breadcrumbs'

const routes = (
  <div>
    <Breadcrumbs />
    <Route
      path="/:url*"
      exact
      strict
      render={props => <Redirect to={`${props.location.pathname}/`} />}
    />
    <Route
      path="/"
      exact
      strict
      render={() => <Redirect to={`/scanners/`} />}
    />
    <Route path="/scanners" component={ScannersRoutes} />
    <Route path="/scanners/:id/scans" component={ScansRoutes} />
    <Route path="/scanners/:id/scans/:id/results" component={ResultsRoutes} />
  </div>
)

export default routes
