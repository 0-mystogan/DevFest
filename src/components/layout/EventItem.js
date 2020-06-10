import React from 'react';

const EventItem = ({ event }) => {
	return (
		<div>
			<h1 className="lead text-left">September 9</h1>
			<div className="events">
				<h1 className="lead">{event.acf.time}</h1>
				<div className="border-content">
					<div dangerouslySetInnerHTML={{ __html: event.title.rendered }}></div>
					<div
						className="content-color"
						dangerouslySetInnerHTML={{ __html: event.content.rendered }}
					></div>
					<small className="left-bottom">{event.acf.timeleft}</small>
					<small className="right-top">{event.acf.language}</small>
					<small className={`right-bottom ${event.acf.category}`}>
						{event.acf.category}
					</small>
				</div>
			</div>
		</div>
	);
};

export default EventItem;
