import { ReportActions } from "../actions/types";

const INITIAL_STATE = {
  reportListData: [],
  reportData: [],
  error: null,
};

const reportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReportActions.GET_REPORT_LIST:
      return {
        ...state,
        reportListData: action.payload,
        error: null,
      };
    case ReportActions.GET_REPORT_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ReportActions.GET_REPORT:
      return {
        ...state,
        reportData: action.payload,
        error: null,
      };
    case ReportActions.GET_REPORT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ReportActions.RESOLVE_REPORT:
      return {
        ...state,
        reportData: action.payload,
        error: null,
      };
    case ReportActions.RESOLVE_REPORT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ReportActions.REJECT_REPORT:
      return {
        ...state,
        reportData: action.payload,
        error: null,
      };
    case ReportActions.REJECT_REPORT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ReportActions.SET_PENDING_REPORT:
      return {
        ...state,
        reportData: action.payload,
        error: null,
      };
    case ReportActions.SET_PENDING_REPORT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
