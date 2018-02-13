import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Date picker app</h1>
        <div id="calender">
          <div id="header">
            <i className="fa fa-bars"></i>
            <p className="monthname">February 2018</p>
            <i class="fa fa-check-circle"></i>
            <i className="fa fa-search" ></i>
          </div>
          <div id="dates">
            {  [...Array(30).keys()].map((i) =>  <div><p>Feb</p></div> )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
