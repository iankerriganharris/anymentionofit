import React from 'react'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { TopNav } from '../common/components'
import { default as navLinks } from './config/navLinks'
import { Container } from 'reactstrap'

export default () => (
  <BrowserRouter>
    <div>
      <TopNav brand="anymentionofit" links={navLinks()} />
      <Container>{Routes}</Container>
    </div>
  </BrowserRouter>
)
