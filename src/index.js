import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./context/AuthenticationContext";
import AgeGroupContextProvider from "./context/SearchAgeGroupContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
          <AgeGroupContextProvider>
         <App />
          </AgeGroupContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
