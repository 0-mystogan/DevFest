import { combineReducers } from 'redux';
import eventsReducer from './eventReducer';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
	events: eventsReducer,
	home: homeReducer,
	about: aboutReducer,
});
