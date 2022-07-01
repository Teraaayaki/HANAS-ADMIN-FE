import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getWorker } from "../../../redux/actions/workerActions";
import ContainerCard from "../../../components/ContainerCard";

const SkilledWorkerDetail = () => {
  let { workerID } = useParams();

  const dispatch = useDispatch();
  const { workerData, error } = useSelector((state) => state.worker);

  useEffect(() => {
    dispatch(getWorker(workerID));
  }, []);

  if (workerData[0] !== undefined) {
    return (
      <div className="main-content">
        <ContainerCard
          link="skilledworkers"
          userInfo={workerData[0]}
        ></ContainerCard>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SkilledWorkerDetail;
