import { ClientActions } from "./types";
import ClientAPI from "../../api/Client";
import history from "../../utils/history";

export const getClients = () => (dispatch) => {
  ClientAPI.getClients()
    .then(({ data }) => {
      dispatch({ type: ClientActions.GET_CLIENTS, payload: data });
    })
    .catch((error) => {
      console.log("Error: getClients");
      dispatch({
        type: ClientActions.GET_CLIENTS_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getClient = (user_id) => (dispatch) => {
  ClientAPI.getClient({ user_id }).then(({ data }) => {
    dispatch({
      type: ClientActions.GET_CLIENT,
      payload: data,
    });
  });
};
