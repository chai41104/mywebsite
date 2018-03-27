import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <CardHeader
          title="Thongchai Wirojsakseree"
          subtitle="Software Development Engineer at Amazon"
          avatar="images/myPicture.jpg"
        />   
        <CardText>
          I am a full-stack developer with a strong programming background. For many years, I have been developing strong programming skills, algorithms, data structures and machine learning techniques. I also implemented many projects in C/C++, Java, JavaScript, Python and other computer languages. With innovative ideas, these projects have disrupted the traditional solutions and reduced a significant cost such as a visited museum app. On my free time, I also attend many online courses and many programming competitions such as Hacker Rank and Hackathon. In Hackathon, I have an excellence chance to discuss and learn with many experts in many technology areas as same as sharing many innovative ideas to change human’s life. In the meantime, I developed various useful skills such as fast-learning, problem-solving and adaptive skill. As a result, I have received many winner prizes in many hackathons such as BlackRock's Hackathon 2015.  
        </CardText>
        <CardActions>
          <FlatButton
            href="mailto:chaitype@gmail.com"
            target="_blank"
            label="chaitype@gmail.com"
            primary={true}
            icon={<a class="mdi mdi-email"></a>}
          />
          <FlatButton
            href="https://github.com/chai41104"
            target="_blank"
            label="Github Profile"
            primary={true}
            icon={<a class="mdi mdi-github-box"></a>}
          />
          <FlatButton
            href="https://www.linkedin.com/in/thongchai-wirojsakseree/"
            target="_blank"
            label="LinkedIn Profile"
            primary={true}
            icon={<a class="mdi mdi-linkedin-box"></a>}
          />
        </CardActions>
      </Card>
    );
  }
}

export default AboutMe;
