import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import workerReducer from "./workerReducer";
import transactionReducer from "./transactionReducer";
import verificationReducer from "./verificationReducer";
import reportReducer from "./reportReducer";
import overviewReducer from "./overviewReducer";

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  worker: workerReducer,
  transaction: transactionReducer,
  verification: verificationReducer,
  report: reportReducer,
  overview: overviewReducer,
});
