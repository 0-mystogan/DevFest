import React, { useEffect } from 'react';
import EventItem from './EventItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventsActions';

const Events = ({ events: { events, isLoaded }, getEvents }) => {
	useEffect(() => {
		getEvents();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{events.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
		</div>
	);
};

Events.propType = {
	events: PropTypes.array.isRequired,
	getEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	events: state.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
