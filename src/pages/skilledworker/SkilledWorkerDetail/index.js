import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getWorker } from "../../../redux/actions/workerActions";
import UserContainerCard from "../../../components/UserContainerCard";

const SkilledWorkerDetail = () => {
  let { workerID } = useParams();

  const dispatch = useDispatch();
  const { workerData, error } = useSelector((state) => state.worker);

  useEffect(() => {
    if (
      workerData === undefined ||
      workerData[0] === undefined ||
      workerData[0]._id !== workerID
    ) {
      dispatch(getWorker(workerID));
    }
  }, [workerData]);

  if (
    workerData !== undefined &&
    workerData[0] !== undefined &&
    workerData[0]._id === workerID
  ) {
    return (
      <div className="main-content">
        <UserContainerCard
          link={"skilledworkers"}
          userInfo={workerData[0]}
        ></UserContainerCard>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SkilledWorkerDetail;
