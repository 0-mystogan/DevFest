import { GET_ABOUT, SET_LOADING } from './types';
import axios from 'axios';

export const getAbout = () => (dispatch) => {
	axios
		.get('/wp-json/wp/v2/about')
		.then((res) => {
			dispatch({
				type: GET_ABOUT,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));

	setLoading();
};

export const setLoading = () => (dispatch) => {
	dispatch({
		type: SET_LOADING,
	});
};
