import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import workerReducer from "./workerReducer";
import transactionReducer from './transactionReducer';

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  worker: workerReducer,
  transaction: transactionReducer,
});
  



