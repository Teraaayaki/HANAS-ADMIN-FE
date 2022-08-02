import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import workerReducer from "./workerReducer";
import transactionReducer from "./transactionReducer";
import verificationReducer from "./verificationReducer";
import reportReducer from "./reportReducer";
import overviewReducer from "./overviewReducer";
import certificationReducer from "./certificationReducer";
import convFeeReducer from "./convFeeReducer";
import achievementReducer from "./achievementReducer";

export default combineReducers({
  auth: authReducer,
  client: clientReducer,
  worker: workerReducer,
  transaction: transactionReducer,
  certification: certificationReducer,
  verification: verificationReducer,
  report: reportReducer,
  overview: overviewReducer,
  convenience: convFeeReducer,
  achievement: achievementReducer,
});
