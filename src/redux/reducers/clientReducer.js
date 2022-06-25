import { ClientActions } from "../actions/types";

const INITIAL_STATE = {
  clientsData: [],
  clientData: [],
  error: null,
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientActions.GET_CLIENTS:
      return {
        ...state,
        clientsData: action.payload,
        error: null,
      };
    case ClientActions.GET_CLIENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ClientActions.GET_CLIENT:
      console.log("Action Payload" + action.payload);
      return {
        ...state,
        clientData: action.payload,
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
