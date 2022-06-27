import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import workerReducer from "./workerReducer";

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  worker: workerReducer,
});
