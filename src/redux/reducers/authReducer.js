import { SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  adminName: null,
  token: null,
  error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        adminName: action.payload.admin_info.name,
        token: action.payload.token,
        error: null
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        adminName: null,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
