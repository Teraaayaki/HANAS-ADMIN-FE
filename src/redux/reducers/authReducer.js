import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  FORGOT_PASS_ERROR,
  FORGOT_PASS_RESET_ERROR,
  FORGOT_PASS_RESET_SUCCESS,
  FORGOT_PASS_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  adminName: null,
  forgotPassError: null,
  successMessage: "",
  token: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        adminName: action.payload.admin_info.name,
        token: action.payload.token,
        error: null,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        adminName: null,
        token: null,
      };
    case FORGOT_PASS_ERROR:
      return {
        ...state,
        forgotPassError: action.payload,
      };
    case FORGOT_PASS_RESET_SUCCESS:
      return {
        ...state,
        success: false,
        successMessage: "",
      };
    case FORGOT_PASS_SUCCESS:
      return {
        ...state,
        success: true,
        successMessage: "Password has been successfully changed",
      };
    case FORGOT_PASS_RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
