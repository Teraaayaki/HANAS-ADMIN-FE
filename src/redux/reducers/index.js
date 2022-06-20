import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import verificationReducer from "./verificationReducer";

export default combineReducers({
  auth: authReducer,
  verification: verificationReducer,
  client: clientReducer,
});
