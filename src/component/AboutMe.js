import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React again</h1>
        </header>
        <p className="App-intro">
          I start to edit <code>src/App.js</code>.
        </p>
      </div>
    );
  }
}

export default AboutMe;
