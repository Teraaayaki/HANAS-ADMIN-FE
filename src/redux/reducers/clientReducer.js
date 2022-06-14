import { GET_CLIENT, GET_CLIENT_ERROR } from "./types";

const INITIAL_STATE = {
  client_id: null,
  token: null,
  error: null,
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        client_id: action.payload.client_info.id,
        token: action.payload.token,
        error: null,
      };
    case GET_CLIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
