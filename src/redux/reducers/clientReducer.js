import { ClientActions } from "../actions/types";

const INITIAL_STATE = {
  clientData: [],
  client_id: null,
  error: null,
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientActions.GET_CLIENTS:
      return {
        clientData: action.payload,
        error: null,
      };
    case ClientActions.GET_CLIENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ClientActions.GET_CLIENT:
      return {
        client_id: action.payload.client_info.id,
        error: null,
      };
    case ClientActions.GET_CLIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
