import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ContainerCard from "../../../components/ContainerCard";
import {
  getSpecificVerification,
} from "../../../redux/actions/verificationActions.js";

const VerificationRequestDetail = () => {
  let { requestID } = useParams();

  const dispatch = useDispatch();

  const { verificationData } = useSelector(
    (state) => state.verification
  );

  useEffect(() => {
    dispatch(getSpecificVerification(requestID));
  }, [dispatch, requestID]);

  return (
    <div className="main-content">
      <ContainerCard
        link="verification-requests"
        userInfo={verificationData}
      ></ContainerCard>
    </div>
  );
};

export default VerificationRequestDetail;
