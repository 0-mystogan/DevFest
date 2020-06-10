import { GET_HOMEPAGE, GET_LOGOURL, SET_LOADING } from './types';
import axios from 'axios';

export const getHomepage = () => (dispatch) => {
	axios
		.get('/wp-json/wp/v2/pages/12')
		.then((res) => {
			dispatch({
				type: GET_HOMEPAGE,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));

	setLoading();
};

export const getLogoUrl = (id) => (dispatch) => {
	axios
		.get(`/wp-json/wp/v2/media/${id}`)
		.then((res) => {
			dispatch({
				type: GET_LOGOURL,
				payload: res.data.media_details.sizes.full.source_url,
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
