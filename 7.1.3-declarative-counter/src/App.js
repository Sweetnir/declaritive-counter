import React, { useState } from 'react';


import logo from './logo.svg';
import './App.css';

function App() {
  let [ counter, setCounter ] = useState(1);
  window.setCounter = setCounter;

  return (
    <div className="App">
      <h1> { counter } </h1>
      <h4> { counter } </h4>
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
