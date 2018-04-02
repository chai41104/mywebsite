import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const AboutMe = () => (
	<Card>
		<CardHeader
			title="Thongchai Wirojsakseree"
			subtitle="Software Development Engineer at Amazon"
			avatar="images/myPicture.jpg"
		/>   
		<CardText>
      I am a Software Engineer with a strong programming background and experience. For many years, I have been developing strong programming skills, algorithms, data structures and machine learning techniques. I also implemented many projects in C/C++, JavaScript, Java, Python and other computer languages. With innovative ideas, these projects have disrupted the traditional solutions and reduced a significant cost such as a visited museum app. On my free time, I also attend many online courses and many programming competitions such as Hacker Rank and Hackathon. In Hackathon, I have an excellent chance to discuss and learn with many experts in many technology areas as same as sharing many innovative ideas to change human’s life. In the meantime, I developed various useful skills such as fast-learning, problem-solving and adaptive skill. As a result, I have received many winner prizes in many hackathons such as InsurTech Hackathon (AI & Robotics) and London Innovation Hackathon by Barrick in 2017.
		</CardText>
		<CardActions>
			<FlatButton
				href="mailto:chaitype@gmail.com"
				target="_blank"
				label="chaitype@gmail.com"
				primary={true}
				icon={<a className="mdi mdi-email"></a>}
			/>
			<FlatButton
				href="https://github.com/chai41104"
				target="_blank"
				label="Github Profile"
				primary={true}
				icon={<a className="mdi mdi-github-box"></a>}
			/>
			<FlatButton
				href="https://www.linkedin.com/in/thongchai-wirojsakseree/"
				target="_blank"
				label="LinkedIn Profile"
				primary={true}
				icon={<a className="mdi mdi-linkedin-box"></a>}
			/>
		</CardActions>
	</Card>
);

export default AboutMe;
