import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getClients } from "../../../redux/actions/clientActions";
import { Link } from "react-router-dom";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";

import style from "./index.module.scss";

const clients = [
  {
    id: 1,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Mary Therese Sun Alegre",
    address: "Bogo City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "PENDING",
  },
  {
    id: 2,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "General Salipada K. Pendatun",
    address: "Cebu City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "VERIFIED",
  },
  {
    id: 3,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Robert Downey",
    address: "Mandaue City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "UNVERIFIED",
  },
  {
    id: 4,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Christian Bale",
    address: "Danao City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "PENDING",
  },
  {
    id: 5,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Henry Cavil",
    address: "Daanbantayan City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "VERIFIED",
  },
  {
    id: 6,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Blake Lively",
    address: "Carcar City, Cebu",
    member_since: "September 26, 2022",
    time: "6:30 PM",
    status: "VERIFIED",
  },
  {
    id: 7,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Christian Bale",
    address: "Danao City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "PENDING",
  },
  {
    id: 8,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Henry Cavil",
    address: "Daanbantayan City, Cebu",
    member_since: "May 26, 2019",
    time: "6:30 PM",
    status: "VERIFIED",
  },
  {
    id: 9,
    pp: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    name: "Blake Lively",
    address: "Carcar City, Cebu",
    member_since: "September 26, 2022",
    time: "6:30 PM",
    status: "VERIFIED",
  },
];

const ClientList = () => {
  const headerNames = ["Name", "Address", "Member Since", "Account Status"];

  const dispatch = useDispatch();
  const { clientData, error } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch();
  });

  const renderClientList = () => {
    return clients.map((client, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={client.pp}
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
            <span>{client.member_since}</span> <br />
            <span className={style.time}>{client.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={client.status} />
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
