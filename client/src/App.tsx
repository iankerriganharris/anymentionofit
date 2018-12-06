import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ScannersContainer from './containers/ScannersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScannersContainer />
      </div>
    )
  }
}

export default App
