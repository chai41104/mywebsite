import React, { Component } from 'react';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import {ABOUTME_PAGE, RESUME_PAGE, PORTFOLIO_PAGE, CONTACT_PAGE} from './constant/page';
import AboutMe from './component/AboutMe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ABOUTME_PAGE
    };
  }
  render() {
    return (
      <MuiThemeProvider>
        {this.displayContent()}
      </MuiThemeProvider>
    );
  }

  displayContent() {
    switch(this.state.page) {
      case RESUME_PAGE:
        return (<AboutMe />)
      case PORTFOLIO_PAGE:
        return (<AboutMe />)
      case CONTACT_PAGE:
        return (<AboutMe />)
      case ABOUTME_PAGE:
      default:
        return (<AboutMe />)
    }
  }
}

export default App;
