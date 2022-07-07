import React from 'react';
// import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


/* const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(application, document.getElementById('root')); */
/* ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
registerServiceWorker();
