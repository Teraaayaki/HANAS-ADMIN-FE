import { ReportActions } from "../actions/types";

const INITIAL_STATE = {
  reportListData: [],
  reporterReportsListData: [],
  reportData: [],
  error: null,
  reporterReportsListError: null,
  success: null,
  successMessage: "",
};

const reportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReportActions.GET_REPORT_LIST:
      return {
        ...state,
        reportListData: action.payload,
        error: null,
      };
    case ReportActions.GET_REPORTER_REPORTS_LIST:
      return {
        ...state,
        reporterReportsListData: action.payload,
        reporterReportsListError: null,
        success: null,
      };
    case ReportActions.GET_REPORTER_REPORTS_LIST_ERROR:
      return {
        ...state,
        reporterReportsListError: action.payload,
        success: false,
        error: null,
      };
    case ReportActions.REPORT_ERROR:
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
    case ReportActions.RESOLVE_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: "Report has been successfully resolved",
      };
    case ReportActions.REJECT_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: "Report has been rejected",
      };
    case ReportActions.REOPEN_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: "Report has been successfully set to Pending",
      };
    case ReportActions.REPORT_RESET_ERROR:
      return {
        ...state,
        success: false,
        error: null,
      };
    case ReportActions.REPORT_RESET_SUCCESS:
      return {
        ...state,
        success: false,
        successMessage: "",
      };
    default:
      return state;
  }
};

export default reportReducer;
