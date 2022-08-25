import cookies from "js-cookie";

import {
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  FORGOT_PASS_ERROR,
  FORGOT_PASS_RESET_ERROR,
  FORGOT_PASS_RESET_SUCCESS,
  FORGOT_PASS_SUCCESS,
} from "./types";
import AuthAPI from "../../api/Auth";
import history from "../../utils/history";

export const signIn = (email, password) => (dispatch) => {
  AuthAPI.login({ email, password })
    .then(({ data }) => {
      cookies.set("access_token", data.token);
      cookies.set("admin_name", data.admin_info.name);
      dispatch({ type: SIGN_IN, payload: data });
      history.push("/overview");
    })
    .catch((error) => {
      console.log("Sign In Error:" + error);
      dispatch({ type: SIGN_IN_ERROR, payload: error?.response?.data?.error });
    });
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT });
  history.push("/login");
};

export const forgotPass = (password) => (dispatch) => {
  AuthAPI.forgotPass(password)
    .then(({ data }) => {
      dispatch({
        type: FORGOT_PASS_SUCCESS,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FORGOT_PASS_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const resetSuccess = () => (dispatch) => {
  dispatch({ type: FORGOT_PASS_RESET_SUCCESS });
};

export const resetError = () => (dispatch) => {
  dispatch({ type: FORGOT_PASS_RESET_ERROR });
}
 