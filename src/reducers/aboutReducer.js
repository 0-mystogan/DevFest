import { GET_ABOUT } from '../actions/types';

const initialState = {
	about: [],
	isLoaded: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ABOUT:
			return {
				...state,
				about: action.payload,
				isLoaded: true,
			};
		default:
			return state;
	}
};
