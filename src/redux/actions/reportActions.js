import { ReportActions } from "./types";
import ReportAPI from "../../api/Report";

export const resetSuccess = () => async (dispatch) => {
  dispatch({
    type: ReportActions.VERIFICATION_RESET_SUCCESS,
  });
};

export const resetError = () => async (dispatch) => {
  dispatch({
    type: ReportActions.VERIFICATION_RESET_ERROR,
  });
};

export const getReportList = () => async (dispatch) => {
  ReportAPI.getReportList()
    .then(({ data }) => {
      dispatch({
        type: ReportActions.GET_REPORT_LIST,
        payload: data.reportList,
      });
    })
    .catch((error) => {
      console.log("GetReportList " + error);
      dispatch({
        type: ReportActions.REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getReport = (reportID) => async (dispatch) => {
  ReportAPI.getReport(reportID)
    .then(({ data }) => {
      dispatch({
        type: ReportActions.GET_REPORT,
        payload: data.reports,
      });
    })
    .catch((error) => {
      console.log("GetReport " + error);
      dispatch({
        type: ReportActions.REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const resolveReport = (reportID) => async (dispatch) => {
  ReportAPI.resolveReport(reportID)
    .then(({ data }) => {
      dispatch({
        type: ReportActions.RESOLVE_REPORT,
      });
    })
    .catch((error) => {
      console.log("ResolveReport " + error);
      dispatch({
        type: ReportActions.REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const rejectReport = (reportID) => async (dispatch) => {
  ReportAPI.rejectReport(reportID)
    .then(({ data }) => {
      dispatch({
        type: ReportActions.REJECT_REPORT,
      });
    })
    .catch((error) => {
      console.log("ResolveReport " + error);
      dispatch({
        type: ReportActions.REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const setPendingReport = (reportID) => async (dispatch) => {
  ReportAPI.setPendingReport(reportID)
    .then(({ data }) => {
      dispatch({
        type: ReportActions.SET_PENDING_REPORT,
      });
    })
    .catch((error) => {
      console.log("ResolveReport " + error);
      dispatch({
        type: ReportActions.REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const sortReport = (DATA) => async (dispatch) => {

  ReportAPI.sortReport(DATA).then( ({data}) => {
    dispatch({ type: ReportActions.GET_REPORT_LIST, payload: data.reportList});
  })
  .catch( (error) => {
    console.log(error);
    dispatch({ type: ReportActions.REPORT_ERROR, payload: error?.response?.data?.error});
  });

};

export const filterReport = (DATA) => async (dispatch) => {
  ReportAPI.filterReport(DATA).then( ({data}) => {
    dispatch({ type: ReportActions.GET_REPORT_LIST, payload: data.reportList});
  })
  .catch( (error) => {
    console.log(error);
    dispatch({ type: ReportActions.REPORT_ERROR, payload: error?.response?.data?.error});
  });
}