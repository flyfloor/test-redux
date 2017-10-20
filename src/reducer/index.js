import { combineReducers } from 'redux';
import userState from './user';
import counterState from './counter';

export default combineReducers({
    userState,
    counterState,
})