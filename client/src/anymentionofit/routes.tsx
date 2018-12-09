import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ScannersRoutes } from '../scanners'

const Main = () => (
  <main>
    <Route path="/:url*" exact strict render={props => <Redirect to={`${props.location.pathname}/`} />} />
    <Route path="/scanners" component={ScannersRoutes} />
  </main>
)

export default Main
