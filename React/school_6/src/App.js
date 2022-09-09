/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {  
  BrowserRouter,
  Routes,
  Route,
  NavLink,
   
} from "react-router-dom";
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { Button } from 'reactstrap';

 
// import Cars from './Cars/Cars'
// import CarDetail from './CarDetail/CarDetail';
class App extends Component {
  render() {

    return (
      <BrowserRouter>
      
      <div>
        <nav className="nav">
          <ul>
            
            <li>              
              <NavLink to="/home"  className={({ isActive }) => (isActive ? 'wfm-active' : ' ')} >Home</NavLink> 
            </li>
            <li>              
              <NavLink to="/about"  className={({ isActive }) => (isActive ? 'wfm-active' : ' ')} >About</NavLink> 
            </li>
            
          </ul>
        </nav>

        <hr/>      
       
 
          <Routes>
            {/* <Route path="/" element={<h1>Home</h1>} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/cars" element={<Cars />} />                  */}
            {/* <Route path="/cars/:name" element={<CarDetail />} />                  */}
            {/* <Route path="/cars/:name" element={<CarDetail name='sss'/>} />                  */}
          </Routes>
       
      </div>
      <Button color="danger">Danger!</Button>
      </BrowserRouter>
    );
  }
}

export default App
