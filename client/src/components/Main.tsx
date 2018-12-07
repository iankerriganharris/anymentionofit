import React from 'react'
import { Route } from 'react-router-dom'
import ScannersContainer from '../containers/ScannersContainer'

const Main = () => (
  <main>
    <Route path="/scanners" component={ScannersContainer} />
  </main>
)

export default Main
