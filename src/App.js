import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import VibeCheckWidget from "./components/VibeCheckWidget";
import VibeCheckCarousel from "./components/VibeCheckCarousel";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Route  path="/widget" component={VibeCheckWidget}/>
      <Route  path="/carousel" component={VibeCheckCarousel}/>
    </Router>

  );
}

export default App;
