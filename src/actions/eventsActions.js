import { GET_EVENTS } from './types';
import axios from 'axios';

export const getEvents = () => async (dispatch) => {
	axios
		.get('/wp-json/wp/v2/events?order=asc')
		.then((res) => {
			dispatch({
				type: GET_EVENTS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
