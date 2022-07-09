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
    dispatch(getClient(clientID));
  }, [clientData]);

  console.log("Params", clientID);
  console.log("ClientData", clientData);

  if (clientData && clientData[0] !== undefined) {
    return (
      <div className="main-content">
        <UserContainerCard
          link="clients"
          userInfo={clientData[0]}
          dispatch={dispatch}
        ></UserContainerCard>
      </div>
    );
  } else {
    return "";
  }
};

export default ClientDetail;
