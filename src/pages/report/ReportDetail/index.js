import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getReport } from "../../../redux/actions/reportActions";
import ReportContainerCard from "../../../components/ReportContainerCard";

const ReportDetail = () => {
  let { reportID } = useParams();

  const dispatch = useDispatch();
  const { reportData, error } = useSelector((state) => state.report);

  useEffect(() => {
    if (
      reportData === undefined ||
      reportData[0] === undefined ||
      reportData[0]._id !== reportID
    ) {
      dispatch(getReport(reportID));
    }
  }, [reportID, reportData]);

  if (
    reportData !== undefined &&
    reportData[0] !== undefined &&
    reportData[0]._id === reportID
  ) {
    return (
      <div className="main-content">
        <ReportContainerCard
          link="user-reports"
          reportInfo={reportData[0]}
        ></ReportContainerCard>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ReportDetail;
