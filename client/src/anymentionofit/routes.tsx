import React from 'react'
import { Route } from 'react-router-dom'
import { ScannersRoutes } from '../scanners'

const Main = () => (
  <main>
    <Route path="/scanners" component={ScannersRoutes} />
  </main>
)

export default Main
