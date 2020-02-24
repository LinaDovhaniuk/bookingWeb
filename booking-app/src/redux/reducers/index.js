import { combineReducers } from 'redux';
import userData from './user';
import { connectRouter } from 'connected-react-router';

// import universitiesData from './universities';

export default history => combineReducers({ userData, router: connectRouter(history) });
