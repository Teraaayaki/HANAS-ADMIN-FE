import { GET_CLIENTS, GET_CLIENTS_ERROR, GET_CLIENT } from "./types";
import ClientAPI from "../../api/Client";
import history from "../../utils/history";

export const getClients = () => (dispatch) => {
  ClientAPI.getClients()
    .then(({ data }) => {
      dispatch({ type: GET_CLIENTS, payload: data });
      history.push("./get-clients");
    })
    .catch((error) => {
      console.log("Error: getClients");
      dispatch({
        type: GET_CLIENTS_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
