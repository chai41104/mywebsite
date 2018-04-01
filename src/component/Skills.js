import React, { Component } from 'react';
import {Card, CardTitle, CardHeader, CardActions} from 'material-ui/Card';
import 'react-vertical-timeline-component/style.min.css';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import {blue300, indigo900} from 'material-ui/styles/colors';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	programmingLanguages: [
			{key: 0, label: 'C/C++', icon: 'mdi mdi-language-c'},
			{key: 1, label: 'Python', icon: 'mdi mdi-language-python'},
			{key: 2, label: 'JavaScript', icon: 'mdi mdi-language-javascript'},
			{key: 3, label: 'Java', text: 'J'},
		], 
		TechnologyAreas: [
			{key: 0, label: 'Machine Learning', text: 'ML'},
			{key: 1, label: 'Algorithms and Data structures', text: 'AD'},
			{key: 2, label: 'Database', text: 'DB'},
			{key: 3, label: 'Multi­Threading', text: 'MT'},
			{key: 4, label: 'Image processing', text: 'IP'},
		],
		Backend: [
			{key: 0, label: 'Flask', text: 'F'},
			{key: 1, label: 'Node.js', icon: 'mdi mdi-nodejs'},
			{key: 2, label: 'Django', text: 'DJ'},
		],
		Frontend: [
			{key: 0, label: 'React-Native', icon: 'mdi mdi-react'},
			{key: 1, label: 'jQuery', icon: 'mdi mdi-jquery'},
			{key: 2, label: 'Bootstrap', icon: 'mdi mdi-bootstrap'},
			{key: 4, label: 'HTML5', icon: 'mdi mdi-language-html5'},
			{key: 3, label: 'UI/UX', text: 'UX'},
		],
		Languages: [
			{key: 0, label: 'Thai', text: 'TH'},
			{key: 1, label: 'English', text: 'EN'},
		],
	};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: { 
      	margin: 5,
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  renderAvatar(data) {
  	if (data.icon) {
  		return (<a className={data.icon}></a>);
  	} else {
  		return data.text;
  	}
  }

  renderChip(data) {
    return (
		<Chip onClick={() => {}} style={this.styles.chip} backgroundColor={blue300}>
			<Avatar color={blue300} backgroundColor={indigo900} size={32}>
				{this.renderAvatar(data)}
			</Avatar>
			{data.label}
		</Chip>
    );
  }

  render() {
    return (
    	<Card>
			<CardTitle title="My Skills"/>
			<CardHeader
				title="Programming Languages"
			/>
			<div style={this.styles.wrapper}>
		    	{this.state.programmingLanguages.map(this.renderChip, this)}
		    </div>
		    <CardHeader
				title="Technology Areas"
			/>
			<div style={this.styles.wrapper}>
		    	{this.state.TechnologyAreas.map(this.renderChip, this)}
		    </div>
		    <CardHeader
				title="Backend"
			/>
			<div style={this.styles.wrapper}>
		    	{this.state.Backend.map(this.renderChip, this)}
		    </div>
		    <CardHeader
				title="Frontend"
			/>
			<div style={this.styles.wrapper}>
		    	{this.state.Frontend.map(this.renderChip, this)}
		    </div>
		    <CardHeader
				title="Languages"
			/>
			<div style={this.styles.wrapper}>
		    	{this.state.Languages.map(this.renderChip, this)}
		    </div>
		</Card>
		);
	}
}

export default Skills;
