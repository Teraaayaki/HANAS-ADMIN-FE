import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";

import {
  filterReport,
  getReportList,
  sortReport,
} from "../../../redux/actions/reportActions";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";
import style from "./index.module.scss";
import { Button } from "react-bootstrap";

const renderReportList = (reportListData) => {
  return reportListData.map((report, idx) => {
    return (
      <tr key={idx} className={style.tableDataRow}>
        <td className={style.tableData}>
          <Link to={`/user-reports/${report._id}`}>
            <span>{report.concern}</span>
          </Link>
        </td>

        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={report.reporterData[0].profile_pic}
            alt="&nbsp; Profile Pic"
          />
          <Link
            to={
              report.reporterData[0].is_worker === true
                ? `/skilledworkers/${report.reporterData[0]._id}`
                : `/clients/${report.reporterData[0]._id}`
            }
          >
            <span className={style.truncate}>
              {report.reporterData[0].first_name + " "}
              {report.reporterData[0].middle_name + " "}
              {report.reporterData[0].family_name + " "}
              {report.reporterData[0].suffix}
            </span>
          </Link>
        </td>
        {report.reported_user && report.reportedUserData[0] !== undefined ? (
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={report.pp}
              alt="&nbsp; Profile Pic"
            />
            <Link
              to={
                report.reportedUserData[0].is_worker === true
                  ? `/skilledworkers/${report.reportedUserData[0]._id}`
                  : `/clients/${report.reportedUserData[0]._id}`
              }
            >
              <span className={style.truncate}>
                {report.reportedUserData[0].first_name + " "}
                {report.reportedUserData[0].middle_name + " "}
                {report.reportedUserData[0].family_name + " "}
                {report.reportedUserData[0].suffix}
              </span>
            </Link>
          </td>
        ) : (
          <td className={style.tableData}>
            <span className={style.truncate}>N/A</span>
          </td>
        )}
        <td className={style.tableData}>
          <span>{moment(report.createdAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(report.createdAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={report.status.toUpperCase()} />
        </td>
        {/* <td className={style.tableData}>
          <GoKebabVertical />
        </td> */}
      </tr>
    );
  });
};

const ReportList = ({ itemsPerPage }) => {
  const headerNames = ["Concern", "Reporter", "Reportee", "Date", "Status"];

  const handleSortReport = (e) => {
    dispatch(sortReport(e));
  };

  const handleFilterReport = (e) => {
    dispatch(filterReport(e));
  };

  const sortItems = [
    {
      name: "Default",
      event_key: "all",
      onClick: () => {
        dispatch(handleSortReport("all"));
      },
    },
    {
      name: "Name (A-Z)",
      event_key: "name",
      onClick: () => {
        dispatch(handleSortReport("name"));
      },
    },
    {
      name: "Date",
      event_key: "date",
      onClick: () => {
        dispatch(handleSortReport("date"));
      },
    },
  ];

  const filterItems = [
    {
      name: "Default",
      event_key: "all",
      onClick: () => {
        dispatch(handleFilterReport("all"));
      },
    },
    {
      name: "Resolved",
      event_key: "resolved",
      onClick: () => {
        dispatch(handleFilterReport("resolved"));
      },
    },
    {
      name: "Pending",
      event_key: "pending",
      onClick: () => {
        dispatch(handleFilterReport("pending"));
      },
    },
    {
      name: "Rejected",
      event_key: "rejected",
      onClick: () => {
        dispatch(handleFilterReport("rejected"));
      },
    },
  ];

  const dispatch = useDispatch();
  const { reportListData } = useSelector((state) => state.report);

  useEffect(() => {
    dispatch(getReportList());
  }, [dispatch]);

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(reportListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(reportListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, reportListData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % reportListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="main-content">
        <DataTable
          tableTitle="Reports and Concerns"
          headerNames={headerNames}
          renderData={() => renderReportList(currentItems)}
          sortItems={sortItems}
          filterItems={filterItems}
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
    return (
      <div className="main-content">
        <div className={style.flexedContainer}>
          <h1 className="m-auto">No Data Preview Available</h1>
          <Button className="m-auto" variant="dark" href="/admin/user-reports">
            Go Back
          </Button>
        </div>
      </div>
    );
  }
};

const PaginatedReportList = () => {
  return <div>{<ReportList itemsPerPage={2} />}</div>;
};

export default PaginatedReportList;
