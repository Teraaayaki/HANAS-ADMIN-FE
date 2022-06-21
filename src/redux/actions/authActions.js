import cookies from "js-cookie";

import { SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from "./types";
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
      console.log("hjere");
      dispatch({ type: SIGN_IN_ERROR, payload: error?.response?.data?.error });
    });
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT });
  history.push("/login");
};
