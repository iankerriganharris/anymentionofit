import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './config/store'
import { PersistGate } from 'redux-persist/integration/react'
import { default as App } from './App'

const { store, persistor } = configureStore()

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
