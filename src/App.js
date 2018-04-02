import React, { Component } from 'react';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import {ABOUTME_PAGE, RESUME_PAGE, PORTFOLIO_PAGE, CONTACT_PAGE} from './constant/page';
import AboutMe from './component/AboutMe';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            {this.header()}
            {this.mainSidebar()}
            {this.content()}
            {this.controlSidebar()}
            {this.controlSidebarBG()}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
  header() {
    return (
      <div>
        <header className="main-header">
          <a href="index2.html" className="logo">
            <span className="logo-mini">TC</span>
            <span className="logo-lg">Thongchai</span>
          </a>
          <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  mainSidebar() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <li>
              <Link to="/aboutme">
                <a className="mdi mdi-account"> </a>
                <span>About Me</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <a className="mdi mdi-chart-pie"> </a>
                <span>Experiences</span>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <a className="mdi mdi-poll"> </a>
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <a className="mdi mdi-laptop-chromebook"> </a>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="mdi mdi-email-outline"> </a>
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <a href="https://thongchaiold.herokuapp.com/">
                <a className="mdi mdi-logout"> </a>
                <span>My old website</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
  content() {
    return (
      <div className="content-wrapper">
        <section className="content">
          <Route exact path="/" component={AboutMe} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </section>
      </div>
    );
  }
  controlSidebar() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
        </ul>
        <div className="tab-content">
          <div className="tab-pane" id="control-sidebar-home-tab">
          </div>
        </div>
      </aside>
    );
  }
  controlSidebarBG() {
    return (<div className="control-sidebar-bg"></div>);
  }
}

export default App;
