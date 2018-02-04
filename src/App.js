import React, { Component } from 'react';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React again</h1>
          </header>
          <p className="App-intro">
            I start to edit <code>src/App.js</code>.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
