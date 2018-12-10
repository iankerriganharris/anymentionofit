import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ScanDetailContainer } from './containers'
import { RouteComponentProps } from 'react-router'

const routes = ({ match }: RouteComponentProps) => {
  return (
    <div>
      <Route exact path={`${match.path}/:id`} component={ScanDetailContainer} />
    </div>
  )
}

export default routes
