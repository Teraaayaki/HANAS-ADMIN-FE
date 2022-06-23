import { ClientActions } from "./types";
import ClientAPI from "../../api/Client";

export const getClients = () => (dispatch) => {
  ClientAPI.getClients()
    .then(({ data }) => {
      dispatch({ type: ClientActions.GET_CLIENTS, payload: data.clients });
    })
    .catch((error) => {
      console.log("Error: getClients\n-" + error);
      dispatch({
        type: ClientActions.GET_CLIENTS_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getClient = (id) => (dispatch) => {
  ClientAPI.getClient({ id })
    .then(({ data }) => {
      dispatch({
        type: ClientActions.GET_CLIENT,
        payload: data.client,
      });
    })
    .catch((error) => {
      console.log("GetClient " + error);
      dispatch({
        type: ClientActions.GET_CLIENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
