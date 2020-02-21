import { combineReducers } from 'redux';
import userData from './user';
import { routerReducer } from 'react-router-redux'

// import universitiesData from './universities';

export default combineReducers({ userData, routing: routerReducer});
