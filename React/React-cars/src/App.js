import React, { Component } from 'react'
import './App.scss'
import {  
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
      
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>               
            </li>
            <li>              
              <NavLink to="/about" exact className={({ isActive }) => (isActive ? 'wfm-active' : ' ')} >About</NavLink> 
            </li>
            <li>
              <NavLink to="/cars"  >Cars</NavLink>                
              {/* <NavLink to={{
                pathname:"/cars#",
                // pathname: '/cars ',
                search: '?some=search-string',
                hash: '#howdy',
                }} exact 
                className={({ isActive }) => (isActive ? 'wfm-active' : ' ')}
                >Cars</NavLink>    */}             
            </li>
          </ul>
        </nav>

        <hr/>      
       
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />                 
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />                 
          </Routes>
          <Routes>
            <Route path="/cars" element={<Cars />} />                 
          </Routes>
       {/* </BrowserRouter> */}
      </div>
      </BrowserRouter>

    );
  }
}

export default App
