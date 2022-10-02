import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getClient } from "../../../redux/actions/clientActions";
import UserContainerCard from "../../../components/UserContainerCard";
import ReporterReportsTableCard from "../../../components/ReporterReportsTableCard";
import { Fragment } from "react";

const ClientDetail = () => {
  let { clientID } = useParams();
  const dispatch = useDispatch();
  const { clientData, clientError } = useSelector((state) => state.client);

  useEffect(() => {
    if (
      clientData === undefined ||
      clientData[0] === undefined ||
      clientData[0]._id !== clientID
    ) {
      dispatch(getClient(clientID));
    }
  }, [clientID, clientData]);

  if (
    clientData !== undefined &&
    clientData[0] !== undefined &&
    clientData[0]._id === clientID
  ) {
    return (
      <Fragment>
        <div className="main-content">
          <UserContainerCard link={"clients"} userInfo={clientData[0]} />
          <ReporterReportsTableCard clientID={clientData[0]._id} />
        </div>
      </Fragment>
    );
  } else {
    return "";
  }
};

export default ClientDetail;
