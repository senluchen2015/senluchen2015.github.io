import React from 'react';
import './timeline-event.scss';

const TimeLineEvent = ({imgLink, date, text}) => {
	return (
		<li className="timeline-event">
			<div className="img-wrapper">
				<img src={imgLink} role="presentation"/>
			</div>
			<p><span className="date">{date}</span> {text}</p>
		</li>
	);
}

export default TimeLineEvent;