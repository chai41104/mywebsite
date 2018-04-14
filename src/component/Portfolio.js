import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import {Card, CardTitle} from 'material-ui/Card';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '95%',
    height: 500,
    overflowY: 'auto',
  },
};

const projects = [
  {
    img: 'images/Zombie_Apocalypse.png',
    title: 'Zombie Apocalypse',
    subtitle: 'Game VR Hackathon project',
    url: 'https://aframe.io/blog/awoa-59/',
  },
  {
    img: 'images/Diversity.png',
    title: 'Diversity',
    subtitle: 'AI VR Hackathon project',
    url: 'https://www.youtube.com/watch?v=6fNBITIH6Yk&t=2s',
  },
  {
    img: 'images/finvestbot.png',
    title: 'Finvestbot',
    subtitle: 'ChatBot Hackathon project',
    url: 'https://devpost.com/software/finvestbot',
  },
  {
    img: 'images/System_Risk.png',
    title: 'System Risk',
    subtitle: 'System Risk Web application',
    url: 'http://chai41104.github.io/',
  },
  {
    img: 'images/human_tetris.png',
    title: 'Human Tetris',
    subtitle: 'Game Webcam Hackathon project',
    url: 'https://gus.today/projects/human-tetris/',
  },
  {
    img: 'images/insurotion.png',
    title: 'Insurotion',
    subtitle: 'Harvest-moon-style Game for Insurance Hackathon',
    url: 'https://insurotion.herokuapp.com/',
  },
];

export default class Portfolio extends React.Component {
  render() {
  	return (
      <Card>
    		<CardTitle title="Highlight Projects"/>
    		<div style={styles.root}>
  		    <GridList
  		      cols={3}
  		      cellHeight={200}
  		      padding={1}
  		      style={styles.gridList}
  		    >
  		      {projects.map((project) => (
  		        <GridTile
  		          key={project.img}
  		          actionIcon={
  		          	<IconButton 
  		          		onClick={() => window.open(project.url,"_self")}
  		          	>
  		          		<a className="mdi mdi-apple-keyboard-shift mdi-light mdi-24px"> </a>
  		          	</IconButton>
  		          }
  		          actionPosition="right"
  		          title={project.title}
  		          titlePosition="top"
  		          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
  		          subtitle={project.subtitle}
  		          cols={1}
  		          rows={1}
  		        >
  		          <img src={project.img} alt="projects"/>
  		        </GridTile>
  		      ))}
  		    </GridList>
        </div>
      </Card>
    );
  }
}
