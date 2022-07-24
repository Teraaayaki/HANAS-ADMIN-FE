import { CertificationActions } from "../actions/types";

const INITIAL_STATE = {
  certificationListData: [],
  certificationData: [],
  error: null,
};

const certificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CertificationActions.GET_CERTIFICATION_LIST:
      return {
        ...state,
        certificationListData: action.payload,
        error: null,
      };
    case CertificationActions.GET_CERTIFICATION_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CertificationActions.GET_CERTIFICATION:
      return {
        ...state,
        certificationData: action.payload,
        error: null,
      };
    case CertificationActions.GET_CERTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CertificationActions.ACCEPT_CERTIFICATION:
      return {
        ...state,
        certificationData: action.payload,
        error: null,
      };
    case CertificationActions.ACCEPT_CERTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CertificationActions.REJECT_CERTIFICATION:
      return {
        ...state,
        certificationData: action.payload,
        error: null,
      };
    case CertificationActions.REJECT_CERTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CertificationActions.SET_PENDING_CERTIFICATION:
      return {
        ...state,
        certificationData: action.payload,
        error: null,
      };
    case CertificationActions.SET_PENDING_CERTIFICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default certificationReducer;
