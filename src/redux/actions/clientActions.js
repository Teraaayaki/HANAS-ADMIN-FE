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

export const activateClient = (clientID) => async (dispatch) => {
  ClientAPI.activateClient(clientID)
    .then(({ data }) => {
      dispatch({
        type: ClientActions.ACTIVATE_CLIENT,
      });
    })
    .catch((error) => {
      console.log("ActivateClient " + error);
      dispatch({
        type: ClientActions.ACTIVATE_CLIENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const deactivateClient = (clientID) => async (dispatch) => {
  ClientAPI.deactivateClient(clientID)
    .then(({ data }) => {
      dispatch({
        type: ClientActions.DEACTIVATE_CLIENT,
      });
    })
    .catch((error) => {
      console.log("DeactivateClient " + error);
      dispatch({
        type: ClientActions.DEACTIVATE_CLIENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
export const sortClient = (DATA) => async (dispatch) => {
  ClientAPI.sortClient(DATA)
    .then(({ data }) => {
      dispatch({
        type: ClientActions.GET_CLIENT_LIST,
        payload: data.clientList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ClientActions.GET_CLIENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const filterClient = (DATA) => async (dispatch) => {
  ClientAPI.filterClient(DATA)
    .then(({ data }) => {
      dispatch({
        type: ClientActions.GET_CLIENT_LIST,
        payload: data.clientList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ClientActions.GET_CLIENT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
