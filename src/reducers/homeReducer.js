import { GET_HOMEPAGE, GET_LOGOURL, SET_LOADING } from '../actions/types';

const initialState = {
	home: null,
	imageUrl: '',
	isLoaded: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_HOMEPAGE:
			return {
				...state,
				home: action.payload,
				isLoaded: true,
			};
		case GET_LOGOURL:
			return {
				...state,
				imageUrl: action.payload,
				isLoaded: true,
			};
		case SET_LOADING:
			return {
				isLoaded: false,
			};
		default:
			return state;
	}
};
