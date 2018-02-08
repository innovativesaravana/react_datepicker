import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Date picker app</h1>
        <div id="calender">
          <div id="header">
            <i class="far fa-bars"></i>
            <p className="monthname">February 2018</p>
            <i class="fas fa-calendar-check" aria-hidden="true"></i>
            <i class="far fa-search" aria-hidden="true"></i>
          </div>
          <div id="dates"></div>
        </div>
      </div>
    );
  }
}

export default App;
