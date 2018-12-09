import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './config/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Link } from 'react-router-dom'
import { TopNav } from '../common/components'
import { default as navLinks } from './config/navLinks'

const { store, persistor } = configureStore()

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <TopNav brand="anymentionofit" links={navLinks()} />
          <Routes />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
