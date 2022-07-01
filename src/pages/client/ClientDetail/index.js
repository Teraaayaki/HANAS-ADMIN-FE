import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getClient } from "../../../redux/actions/clientActions";
import ContainerCard from "../../../components/ContainerCard";

const ClientDetail = () => {
  let { clientID } = useParams();

  const dispatch = useDispatch();
  const { clientData, error } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClient(clientID));
  }, []);

  console.log("clientID:", clientID);
  console.log("clientData:", clientData);
  console.log("clientData[0]:", clientData[0]);

  if (clientData[0] !== undefined) {
    return (
      <div className="main-content">
        <ContainerCard link="clients" userInfo={clientData[0]}></ContainerCard>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ClientDetail;
