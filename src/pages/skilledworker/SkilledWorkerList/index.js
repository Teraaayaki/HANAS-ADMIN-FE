import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getWorkerList } from "../../../redux/actions/workerActions";
import { Link } from "react-router-dom";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";

import style from "./index.module.scss";

const SkilledWorkerList = () => {
  const headerNames = [
    "Name",
    "Address",
    "Services",
    "Member Since",
    "Account Status",
  ];

  const dispatch = useDispatch();
  const { workerListData, error } = useSelector((state) => state.worker);

  useEffect(() => {
    dispatch(getWorkerList());
    console.log("WorkerListData", workerListData);
  }, [dispatch]);

  const renderMyServicesList = (myServicesData) => {
    let last = myServicesData.length - 1;
    if (last > 0) {
      return myServicesData.map((myService, idx) => {
        if (idx < last) {
          return <span>{myService.servicesData[0].service_type}, </span>;
        } else {
          return <span>{myService.servicesData[0].service_type}</span>;
        }
      });
    } else if (last > -1) {
      return <span>{myServicesData[0].servicesData[0].service_type}</span>;
    } else {
      return;
    }
  };

  const renderSkilledWorkersList = () => {
    return workerListData.map((skilledworker, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={skilledworker.pp}
              alt="&nbsp; Profile Pic"
            />
            <Link to={`/skilledworkers/${skilledworker.id}`}>
              <span className={style.truncate}>{skilledworker.name}</span>
            </Link>
          </td>
          <td className={style.tableData}>
            <span>{skilledworker.address}</span>
          </td>
          <td className={style.tableData}>
            {renderMyServicesList(skilledworker.myServicesData)}
          </td>
          <td className={style.tableData}>
            <span>{moment(skilledworker.createdAt).format("LL")}</span> <br />
            <span className={style.time}>
              {moment(skilledworker.createdAt).format("LT")}
            </span>
          </td>
          <td className={style.tableData}>
            <StatusBadge
              status={
                skilledworker.isDeactivated
                  ? "DEACTIVATED"
                  : skilledworker.verificationData.verifyStatus
                  ? skilledworker.verificationData.verifyStatus.toUpperCase()
                  : "NO DATA"
              }
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
        renderData={renderSkilledWorkersList}
      />
    </div>
  );
};

export default SkilledWorkerList;
