import React, { Component } from 'react';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import {ABOUTME_PAGE, RESUME_PAGE, PORTFOLIO_PAGE, CONTACT_PAGE} from './constant/page';
import AboutMe from './component/AboutMe';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <header class="main-header">
          <a href="index2.html" class="logo">
            <span class="logo-mini">TC</span>
            <span class="logo-lg">Thongchai</span>
          </a>
          <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </a>
            <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
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
      <aside class="main-sidebar">
        <section class="sidebar">
          <ul class="sidebar-menu" data-widget="tree">
            <li class="active treeview">
              <Link to="/">
                <i class="fa fa-pie-chart"></i>
                <span>About Me</span>
              </Link>
            </li>
            <li class="active treeview">
              <Link to="/resume">
                <i class="fa fa-pie-chart"></i>
                <span>Resume (CV)</span>
              </Link>
            </li>
            <li class="active treeview">
              <Link to="/portfolio">
                <i class="fa fa-pie-chart"></i>
                <span>Portfolio</span>
              </Link>
            </li>
            <li class="active treeview">
              <Link to="/contact">
                <i class="fa fa-pie-chart"></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
  content() {
    return (
      <div class="content-wrapper">
        <section class="content">
          <Route exact path="/" component={AboutMe} />
          <Route path="/resume" component={AboutMe} />
          <Route path="/portfolio" component={AboutMe} />
          <Route path="/contact" component={AboutMe} />
        </section>
      </div>
    );
  }
  controlSidebar() {
    return (
      <aside class="control-sidebar control-sidebar-dark">
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        </ul>
        <div class="tab-content">
          <div class="tab-pane" id="control-sidebar-home-tab">
          </div>
        </div>
      </aside>
    );
  }
  controlSidebarBG() {
    return (<div class="control-sidebar-bg"></div>);
  }
}

export default App;
