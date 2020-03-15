import { combineReducers } from 'redux';
import userData from './user';
import propertyData from './property';
import { connectRouter } from 'connected-react-router';



export default history => combineReducers({ userData, propertyData, router: connectRouter(history) });
