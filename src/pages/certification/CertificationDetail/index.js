import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCertification } from "../../../redux/actions/certificationActions";
import CertificationContainerCard from "../../../components/CertificationContainerCard";

const CertificationDetail = () => {
  let { certificationID } = useParams();

  const dispatch = useDispatch();
  const { certificationData, error } = useSelector(
    (state) => state.certification
  );

  useEffect(() => {
    if (
      certificationData === undefined ||
      certificationData[0] === undefined ||
      certificationData[0]._id !== certificationID
    ) {
      dispatch(getCertification(certificationID));
    }
  }, [certificationID, certificationData]);

  if (
    certificationData !== undefined &&
    certificationData[0] !== undefined &&
    certificationData[0]._id === certificationID
  ) {
    return (
      <div className="main-content">
        <CertificationContainerCard
          link="certification-requests"
          certificationInfo={certificationData[0]}
        ></CertificationContainerCard>
      </div>
    );
  } else {
    return "";
  }
};

export default CertificationDetail;
