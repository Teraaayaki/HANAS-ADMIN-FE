import API from "../Base";

const ReportAPI = {
  getReportList: () => {
    const options = {
      method: "GET",
      url: `/admin/get-report-list`,
    };
    return API.request(options);
  },

  getReport: (reportID) => {
    const options = {
      method: "GET",
      url: `/admin/get-report/${reportID}`,
    };
    return API.request(options);
  },

  resolveReport: (reportID) => {
    const options = {
      method: "GET",
      url: `/admin/resolve-report/${reportID}`,
    };
    return API.request(options);
  },

  rejectReport: (reportID) => {
    const options = {
      method: "GET",
      url: `/admin/reject-report/${reportID}`,
    };
    return API.request(options);
  },
};

export default ReportAPI;
