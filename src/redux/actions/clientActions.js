import { ClientActions } from "./types";
import ClientAPI from "../../api/Client";

export const getClientList = () => async (dispatch) => {
  ClientAPI.getClientList()
    .then(({ data }) => {
      dispatch({
        type: ClientActions.GET_CLIENT_LIST,
        payload: data.clientList,
      });
    })
    .catch((error) => {
      console.log("GetClientList " + error);
      dispatch({
        type: ClientActions.GET_CLIENT_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getClient = (clientID) => async (dispatch) => {
  ClientAPI.getClient(clientID)
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
