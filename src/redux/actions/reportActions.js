import { ReportActions } from "./types";
import ReportAPI from "../../api/Report";

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
        type: ReportActions.GET_REPORT_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getReport = (reportID) => async (dispatch) => {
  ReportAPI.getReport(reportID)
    .then(({ data }) => {
      dispatch({
        type: ReportActions.GET_REPORT,
        payload: data.report,
      });
    })
    .catch((error) => {
      console.log("GetReport " + error);
      dispatch({
        type: ReportActions.GET_REPORT_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
