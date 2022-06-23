import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getClient } from "../../../redux/actions/clientActions";
import ContainerCard from "../../../components/ContainerCard";

const userInfo = {
  name: "Tom Luis Cruis",
  email: "tomcruise@gmail.com",
  address: "P2, BLK3, LOT18, Deca Homes, Tungkil, Minglanilla, Cebu",
  sex: "Male",
  birthdate: "July 3, 1962",
  mobile_no: "09655867131",
  member_since: "May 26, 2019",
  valid_id: "Driver's License",
};

const ClientDetail = () => {
  let { requestID } = useParams();

  const dispatch = useDispatch();
  const { clientData, error } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClient(requestID));
  }, []);

  console.log("requestID", requestID);
  console.log("clientData", clientData);

  return (
    <div className="main-content">
      <ContainerCard link="clients" userInfo={userInfo}></ContainerCard>
    </div>
  );
};

export default ClientDetail;
