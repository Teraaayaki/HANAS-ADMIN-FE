import { combineReducers } from 'redux';
import authReducer from './authReducer';
import verificationReducer from './verificationReducer';

export default combineReducers({
  auth: authReducer,
  verification: verificationReducer,
});
