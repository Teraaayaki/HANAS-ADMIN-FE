import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getWorker } from "../../../redux/actions/workerActions";
import UserContainerCard from "../../../components/UserContainerCard";
import ReporterReportsTableCard from "../../../components/ReporterReportsTableCard";
import { getReporterReportsList } from "../../../redux/actions/reportActions";
import { Fragment } from "react";

const SkilledWorkerDetail = () => {
  let { workerID } = useParams();

  const dispatch = useDispatch();
  const { workerData, error } = useSelector((state) => state.worker);
  const { reporterReportsListData, reporterReportsListError } = useSelector(
    (state) => state.report
  );

  useEffect(() => {
    if (
      workerData === undefined ||
      workerData[0] === undefined ||
      workerData[0]._id !== workerID
    ) {
      dispatch(getWorker(workerID));
      dispatch(getReporterReportsList(workerID));
    }
  }, [dispatch, workerID, workerData]);

  if (
    workerData !== undefined &&
    workerData[0] !== undefined &&
    workerData[0]._id === workerID
  ) {
    return (
      <Fragment>
        <div className="main-content">
          <UserContainerCard
            link={"skilledworkers"}
            userInfo={workerData[0]}
          ></UserContainerCard>
          <ReporterReportsTableCard
            reporterReportsListData={reporterReportsListData}
          />
        </div>
      </Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default SkilledWorkerDetail;
