import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  slide: {
    padding: 10,
  },
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }
  componentDidMount() {
    window.initMap();
  }
  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab
            icon={<div className="mdi mdi-home-circle"></div>}
            label="My Address"
            value={0}
          />
          <Tab
            icon={<div className="mdi mdi-gmail"></div>}
            label="Email (Prefer)"
            value={1}
          />
          <Tab
            icon={<div className="mdi mdi-cellphone-basic"></div>}
            label="Mobile Number"
            value={2}
          />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          {this.getMyAddressContent()}
          {this.getMyEmailContent()}
          {this.getMyMobilePhoneContent()}
        </SwipeableViews>
      </div>
    );
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  getMyAddressContent() {
    return (
      <Card>
        <CardTitle title="My Address"/>
        <CardText>Apartment 601, Phoenix Heights West, 142 Byng Street, London, E14 9AE</CardText>
        <CardText>
          <div id="map"></div>
        </CardText>
      </Card>
    );
  }
  getMyEmailContent() {
    return (
      <Card>
        <CardTitle title="My Email"/>
        <CardText>thongchai.wirojsakseree@gmail.com</CardText>
        <CardActions>
          <FlatButton
            href="mailto:thongchai.wirojsakseree@gmail.com"
            target="_blank"
            label="Send an email"
            primary={true}
            icon={<div className="mdi mdi-email"></div>}
          />
        </CardActions>
      </Card>
    );
  }
  getMyMobilePhoneContent() {
    return (
      <Card>
        <CardTitle title="My Mobile Number" subtitle="Prefer Email"/>
        <CardText>(+44)787-3124771</CardText>
      </Card>
    );
  }
}

export default Contact;
