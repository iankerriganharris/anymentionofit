import React from 'react'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { TopNav } from './components'
import { default as navLinks } from './config/navLinks'
import { Container } from 'reactstrap'

// import io from 'socket.io-client'

// const socket = io()

// socket.connect()

// socket.on('notifications', (data: any) => console.log(data))

export default () => (
  <BrowserRouter>
    <div>
      <TopNav brand="anymentionofit" links={navLinks()} />
      <Container>{Routes}</Container>
    </div>
  </BrowserRouter>
)
