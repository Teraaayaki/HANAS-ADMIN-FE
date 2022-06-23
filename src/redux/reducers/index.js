import { combineReducers } from 'redux';
import authReducer from './authReducer';
import overviewReducer from './overviewReducer';

export default combineReducers({
  auth: authReducer,
  overview: overviewReducer
});
