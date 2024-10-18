import React from 'react';
import logo from './img/logo.svg';
import './App.scss';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          help here
        </a>
        <br></br>
   

      </header>
    </div>

    





  );
}

export default App;
