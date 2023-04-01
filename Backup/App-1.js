import React, { Component } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import UserApp from './UserApp/UserApp'
import Navbar from './Router/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import Services from './Components/Services'
import Contact from './Components/Contact'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/userapp"element={<UserApp/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App