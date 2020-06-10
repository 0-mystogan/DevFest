import { GET_EVENTS } from '../actions/types';

const initialState = {
	events: [],
	isLoaded: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_EVENTS:
			return {
				...state,
				events: action.payload,
				isLoaded: true,
			};
		default:
			return state;
	}
};
