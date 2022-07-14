import { ReportActions } from "../actions/types";

const INITIAL_STATE = {
  reportListData: [],
  reportData: [],
  error: null,
  success: null,
  successMessage: '',
};

const reportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReportActions.GET_REPORT_LIST:
      return {
        ...state,
        reportListData: action.payload,
        error: null,
      };
    case ReportActions.REPORT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // case ReportActions.GET_REPORT_LIST_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    case ReportActions.GET_REPORT:
      return {
        ...state,
        reportData: action.payload,
        error: null,
      };
    // case ReportActions.GET_REPORT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    case ReportActions.RESOLVE_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: 'Report has been successfully resolved',
      };
    // case ReportActions.RESOLVE_REPORT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    case ReportActions.REJECT_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: 'Report has been rejected',
      };
    // case ReportActions.REJECT_REPORT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    case ReportActions.SET_PENDING_REPORT:
      return {
        ...state,
        reportData: action.payload,
        success: true,
        successMessage: 'Report has been successfully set to Pending',
      };
    // case ReportActions.SET_PENDING_REPORT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
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
        successMessage: '',
      };
    default:
      return state;
  }
};

export default reportReducer;
