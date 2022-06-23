import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getClients } from "../../../redux/actions/clientActions";
import { Link } from "react-router-dom";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";

import style from "./index.module.scss";

const ClientList = () => {
  const headerNames = ["Name", "Address", "Member Since", "Account Status"];

  const dispatch = useDispatch();
  const { clientData, error } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const renderClientList = () => {
    return clientData.map((client, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={client.profile_pic}
              alt="&nbsp; Profile Pic"
            />
            <Link to={`/clients/${client.id}`}>
              <span className={style.truncate}>{client.name}</span>
            </Link>
          </td>
          <td className={style.tableData}>
            <span>{client.address}</span>
          </td>
          <td className={style.tableData}>
            <span>{moment(client.createdAt).format("LL")}</span> <br />
            <span className={style.time}>
              {moment(client.createdAt).format("LT")}
            </span>
          </td>
          <td className={style.tableData}>
            <StatusBadge
              status={client.verificationData[0].verify_status.toUpperCase()}
            />
          </td>
          <td className={style.tableData}>
            <GoKebabVertical />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="main-content">
      <DataTable
        tableTitle="Details"
        headerNames={headerNames}
        renderData={renderClientList}
      />
    </div>
  );
};

export default ClientList;
