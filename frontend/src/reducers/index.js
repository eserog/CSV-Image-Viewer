import { combineReducers } from 'redux';
import imageReducer from './imageReducer';

export default combineReducers({
	imageState: imageReducer
});