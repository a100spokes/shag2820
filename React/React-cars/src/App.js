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
import CarDetail from './CarDetail/CarDetail';
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
              <NavLink to="/about"  className={({ isActive }) => (isActive ? 'wfm-active' : ' ')} >About</NavLink> 
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
       
 
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />                 
            {/* <Route path="/cars/:name" element={<CarDetail />} />                  */}
            <Route path="/cars/:name" element={<CarDetail name='sss'/>} />                 
          </Routes>
       
      </div>
      </BrowserRouter>

    );
  }
}

export default App
