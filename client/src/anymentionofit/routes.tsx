import React from 'react'
import { Route } from 'react-router-dom'
import { scannersContainer } from '../scanners'

const Main = () => (
  <main>
    <Route path="/scanners" component={scannersContainer} />
  </main>
)

export default Main
