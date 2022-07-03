import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";

import { getWorkerList } from "../../../redux/actions/workerActions";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";
import style from "./index.module.scss";

const renderMyServicesList = (myServicesData) => {
  let last = myServicesData.length - 1;
  if (last > 0) {
    return myServicesData.map((myService, idx) => {
      if (idx < last) {
        return (
          <span key={idx}>{myService.servicesData[0].service_type}, </span>
        );
      } else {
        return <span key={idx}>{myService.servicesData[0].service_type}</span>;
      }
    });
  } else if (last > -1) {
    return <span>{myServicesData[0].servicesData[0].service_type}</span>;
  } else {
    return;
  }
};

const renderSkilledWorkersList = (workerListData) => {
  return workerListData.map((skilledworker, idx) => {
    return (
      <tr key={idx} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={skilledworker.pp}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/skilledworkers/${skilledworker._id}`}>
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
              skilledworker.is_deactivated
                ? "DEACTIVATED"
                : skilledworker.verificationData.verify_status
                ? skilledworker.verificationData.verify_status.toUpperCase()
                : "MISSING DATA"
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

const SkilledWorkerList = ({ itemsPerPage }) => {
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
  }, [dispatch]);

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(workerListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(workerListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, workerListData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % workerListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="main-content">
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={() => renderSkilledWorkersList(currentItems)}
        />

        <div className={style.paginateContainer}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  } else {
    return "";
  }
};

const PaginatedSkilledWorkerList = () => {
  return <div>{<SkilledWorkerList itemsPerPage={1} />}</div>;
};

export default PaginatedSkilledWorkerList;
