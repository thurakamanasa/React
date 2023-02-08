import React, { Component } from 'react'
import Login from './FormRendering/Login'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <hr />
        <Login/>
      </div>
    )
  }
}

export default App