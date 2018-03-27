import React, { Component } from 'react';
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
  },
  {
    img: 'images/Diversity.png',
    title: 'Diversity',
    subtitle: 'AI VR Hackathon project',
  },
  {
    img: 'images/finvestbot.png',
    title: 'Finvestbot',
    subtitle: 'ChatBot Hackathon project',
  },
  {
    img: 'images/System_Risk.png',
    title: 'System Risk',
    subtitle: 'System Risk Web application',
  },
  {
    img: 'images/human_tetris.png',
    title: 'Human Tetris',
    subtitle: 'Game Webcam Hackathon project',
  },
];

const Portfolio = () => (
	<Card>
		<CardTitle>
			Highlight Projects
		</CardTitle>
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
		          		iconStyle={{color: '#FFFFFF'}}
		          		onClick={() => alert('Coming soon')}
		          	>
		          		<i class="material-icons" >event_note</i>
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
		          <img src={project.img}/>
		        </GridTile>
		      ))}
		    </GridList>
	  	</div>
	</Card>
);

export default Portfolio;