import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/

import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "../../components/Table";
import StatusBadge from "../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";

import style from "./index.module.scss";

const reports = [
  {
    id: 1,
    reporter: [
      {
        _id: "a",
        name: "Mary Therese Sun Alegre",
        profile_pic:
          "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
      },
    ],
    reported_user: [
      {
        _id: "a",
        name: "Mary Therese Sun Alegre",
        profile_pic:
          "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
      },
    ],
    concern: "Adding images to featured posts",
    date: "May 26, 2019",
    time: "6:30 PM",
    status: "PENDING",
  },
  {
    id: 1,
    reporter: [
      {
        _id: "a",
        name: "Hosea Mendez Barriga",
        profile_pic:
          "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
      },
    ],
    reported_user: [],
    concern: "Adding images to featured posts",
    date: "May 26, 2019",
    time: "6:30 PM",
    status: "PENDING",
  },
];

const renderReportList = (reportListData) => {
  return reportListData.map((report, idx) => {
    return (
      <tr key={idx} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={report.pp}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/user-reports/${report.reporter[0]._id}`}>
            <span className={style.truncate}>{report.reporter[0].name}</span>
          </Link>
        </td>
        {report.reported_user && report.reported_user[0] !== undefined ? (
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={report.pp}
              alt="&nbsp; Profile Pic"
            />
            <Link to={`/user-reports/${report.reported_user[0]._id}`}>
              <span className={style.truncate}>
                {report.reported_user[0].name}
              </span>
            </Link>
          </td>
        ) : (
          <td className={style.tableData}>
            <span className={style.truncate}>N/A</span>
          </td>
        )}
        <td className={style.tableData}>
          <span>{report.concern}</span>
        </td>
        <td className={style.tableData}>
          <span>{report.date}</span> <br />
          <span className={style.time}> {report.time}</span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={report.status} />
        </td>
        <td className={style.tableData}>
          <GoKebabVertical />
        </td>
      </tr>
    );
  });
};

const ReportList = ({ itemsPerPage }) => {
  const headerNames = ["Reporter", "Reportee", "Concern", "Date", "Status"];

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(reports.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(reports.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, reports]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % reports.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="main-content">
        <DataTable
          tableTitle="Reports and Concerns"
          headerNames={headerNames}
          renderData={() => renderReportList(currentItems)}
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

const PaginatedReportList = () => {
  return <div>{<ReportList itemsPerPage={1} />}</div>;
};

export default PaginatedReportList;
