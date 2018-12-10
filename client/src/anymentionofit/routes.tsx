import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ScannersRoutes } from '../scanners'
import { ScansRoutes } from '../scans'
import { ResultsRoutes } from '../results'

const routes = (
  <div>
    <Route path="/:url*" exact strict render={props => <Redirect to={`${props.location.pathname}/`} />} />
    <Route path="/scanners" component={ScannersRoutes} />
    <Route path="/scanners/:id/scans" component={ScansRoutes} />
    <Route path="/scanners/:id/scans/:id/results" component={ResultsRoutes} />
  </div>
)

export default routes
