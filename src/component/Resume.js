import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {Card, CardTitle} from 'material-ui/Card';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from 'material-ui/svg-icons/action/work';
import EducationIcon from 'material-ui/svg-icons/social/school';

import Button from 'material-ui/Button';

const Resume = () => (
	<div>
		<Card>
			<CardTitle title="My Timeline"/>
		</Card>
		<VerticalTimeline>
		  	<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{background: 'rgb(0, 204, 102)', color: '#fff' }}
				icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">Software Development Engineering, at Amazon.com, Inc.</h3>
				<h4 className="vertical-timeline-element-title">Since Oct. 2017</h4>
				<Button variant="raised" color="secondary" href="https://en.wikipedia.org/wiki/Amazon_(company)">
					<a className="mdi mdi-amazon mdi-light mdi-24px"> </a>
					Amazon.com Inc.
				</Button>
			</VerticalTimelineElement>
		  	<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{ background: 'rgb(0, 204, 102)', color: '#fff' }}
				icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">Software Engineering (Front-Office RAD), JPMorgan Chase & Co.</h3>
				<h4 className="vertical-timeline-element-title">Aug. 2016 - Oct. 2017</h4>
				<Button variant="raised" color="secondary" href="https://en.wikipedia.org/wiki/JPMorgan_Chase">
					<a className="mdi mdi-bank mdi-light mdi-24px"> </a>
					JPMorgan Chase & Co.
				</Button>
			</VerticalTimelineElement>
		  	<VerticalTimelineElement
				className="vertical-timeline-element--work"
				iconStyle={{ background: 'rgb(0, 204, 102)', color: '#fff' }}
				icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">Software Engineering Intern, at Credit Suisse</h3>
				<h4 className="vertical-timeline-element-title">Jun. 2016 - Sep. 2016</h4>
				<Button variant="raised" color="secondary" href="https://en.wikipedia.org/wiki/Credit_Suisse">
					<a className="mdi mdi-bank mdi-light mdi-24px"> </a>
					Credit Suisse Group
				</Button>
			</VerticalTimelineElement>
		  	<VerticalTimelineElement
				className="vertical-timeline-element--education"
				iconStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
				icon={<EducationIcon />}
			>
				<h3 className="vertical-timeline-element-title">MSc Financial Systems Engineering, at University College London (UCL)</h3>
				<h4 className="vertical-timeline-element-subtitle">Studied both Software Engineering and Finanice (Equal To Merit)</h4>
				<h4 className="vertical-timeline-element-title">2015 - 2016</h4>
				<Button variant="raised" color="primary" href="https://en.wikipedia.org/wiki/University_College_London">
					<a className="mdi mdi-school mdi-light mdi-24px"> </a>
					University College London (UCL)
				</Button>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				iconStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
				icon={<EducationIcon />}
			>
				<h3 className="vertical-timeline-element-title">BSc Computer Science at University of Bristol</h3>
				<h4 className="vertical-timeline-element-subtitle">Studied Computer Science (1st honour in all taught modules)</h4>
				<h4 className="vertical-timeline-element-title">2012 - 2015</h4>
				<Button variant="raised" color="primary" href="https://en.wikipedia.org/wiki/University_of_Bristol">
					<a className="mdi mdi-school mdi-light mdi-24px"> </a>
					Bristol University
				</Button>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				iconStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
				icon={<EducationIcon />}
			>
				<h3 className="vertical-timeline-element-title">A-Level at Rochester Independent College</h3>
				<h4 className="vertical-timeline-element-subtitle">Studied Further Mathematic, Mathematic, Statistics and Physics (A*AAA)</h4>
				<h4 className="vertical-timeline-element-subtitle">2011 - 2012</h4>
				<Button variant="raised" color="primary" href="https://en.wikipedia.org/wiki/Rochester_Independent_College">
					<a className="mdi mdi-school mdi-light mdi-24px"> </a>
					Rochester Independent College
				</Button>
			</VerticalTimelineElement>
		</VerticalTimeline>
	</div>
);

export default Resume;
