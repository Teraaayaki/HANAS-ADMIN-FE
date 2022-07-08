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
    dispatch(getReport(reportID));
  }, []);

  if (reportData && reportData[0] !== undefined) {
    console.log("ID", reportID);
    console.log("data", reportData);

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
