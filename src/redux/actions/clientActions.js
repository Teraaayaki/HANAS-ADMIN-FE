import cookies from "js-cookie";

import { GET_CLIENTS, GET_CLIENT } from "./types";
import ClientAPI from "../../api/Client";
import history from "../../utils/history";

export const getClients = (searchVal, filterVal) => (dispatch) => {
  ClientAPI.getClients().then(({ data }) => {
    dispatch({ type: GET_CLIENTS, payload: data });
    history.push("./get-clients");
  });
};
