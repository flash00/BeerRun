import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Ddelivery from './Ddelivery.js';
// import LH from './LH.js';
require('dotenv').config()

class App extends Component {
  constuctor(){


  }

  render() {
    return (
      <div className="App">
        <Ddelivery />
      </div>


    );
  }
}

export default App;
