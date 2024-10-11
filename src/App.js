import React from 'react';
import logo from './img/logo.svg';
import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './scenes/Home';  // Scene components
// import Logement from './scenes/Logement';
// import APropos from './scenes/APropos';
// import NotFound from './scenes/NotFound';
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
