import React from 'react'
import { Route } from 'react-router-dom'
import { ResultDetailContainer } from './containers'
import { RouteComponentProps } from 'react-router'

const routes = ({ match }: RouteComponentProps) => {
  return (
    <div>
      <Route exact path={`${match.path}/:id`} component={ResultDetailContainer} />
    </div>
  )
}

export default routes
