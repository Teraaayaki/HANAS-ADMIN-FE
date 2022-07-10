import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getClient } from "../../../redux/actions/clientActions";
import UserContainerCard from "../../../components/UserContainerCard";

const ClientDetail = () => {
  let { clientID } = useParams();

  const dispatch = useDispatch();
  const { clientData, error } = useSelector((state) => state.client);

  useEffect(() => {
    if (clientData === undefined || clientData[0] === undefined) {
      dispatch(getClient(clientID));
    }
  }, [clientData]);

  if (clientData !== undefined && clientData[0] !== undefined) {
    console.log("Params", clientID);
    console.log("ClientData", clientData);

    return (
      <div className="main-content">
        <UserContainerCard
          link="clients"
          userInfo={clientData[0]}
        ></UserContainerCard>
      </div>
    );
  } else {
    return "";
  }
};

export default ClientDetail;
