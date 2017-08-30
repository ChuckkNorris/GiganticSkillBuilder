import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Portrait } from './components/portrait/portrait.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Portrait></Portrait>
      </div>
    );
  }
}

export default App;
