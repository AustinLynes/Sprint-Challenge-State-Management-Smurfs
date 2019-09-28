import React, { Component } from "react"
import "./App.scss"

import Nav from './sub-components/Nav'
import SmurfList from "./sub-components/SmurfList"
class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <SmurfList/>
      </div>
    )
  }
}

export default App
