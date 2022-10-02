import { ClientActions } from "../actions/types";

const INITIAL_STATE = {
  clientListData: [],
  clientData: [],
  clientError: null,
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientActions.GET_CLIENT_LIST:
      return {
        ...state,
        clientListData: action.payload,
        clientError: null,
      };
    case ClientActions.GET_CLIENT_LIST_ERROR:
      return {
        ...state,
        clientError: action.payload,
      };
    case ClientActions.GET_CLIENT:
      return {
        ...state,
        clientData: action.payload,
        clientError: null,
      };
    case ClientActions.GET_CLIENT_ERROR:
      return {
        ...state,
        clientError: action.payload,
      };
    case ClientActions.ACTIVATE_CLIENT:
      return {
        ...state,
        clientData: action.payload,
        clientError: null,
      };
    case ClientActions.ACTIVATE_CLIENT_ERROR:
      return {
        ...state,
        clientError: action.payload,
      };
    case ClientActions.DEACTIVATE_CLIENT:
      return {
        ...state,
        clientData: action.payload,
        clientError: null,
      };
    case ClientActions.DEACTIVATE_CLIENT_ERROR:
      return {
        ...state,
        clientError: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
