import { VerificationActions } from "../actions/types";

const verificationInitialState = {
  loading: false,
  verificationData: [],
  success: false,
  successMessage: '',
  error: undefined,
};

const verificationReducer = (state = verificationInitialState, action) => {
  switch (action.type) {
    case VerificationActions.VERIFICATION_LOADING:
      return { ...state, loading: true, success: false };
    case VerificationActions.VERIFICATION_SUCCESS:
      return { ...state, loading: false, success: true, successMessage: action.payload };
    case VerificationActions.VERIFICATION_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case VerificationActions.VERIFICATION_RESET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: undefined,
      };
    case VerificationActions.VERIFICATION_RESET_SUCCESS:
        return {
          ...state,
          loading: false,
          success: false,
          successMessage: '',
        };
    case VerificationActions.VERIFICATION_DETAILS:
      return { ...state, loading: false, verificationData: action.payload };
    default:
      return state;
  }
};

export default verificationReducer;
