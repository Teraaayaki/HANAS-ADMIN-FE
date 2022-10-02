import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";
import { GoKebabVertical } from "react-icons/go";

import {
  filterReport,
  getReportList,
  sortReport,
} from "../../redux/actions/reportActions";
import DataTable from "../../components/Table";
import StatusBadge from "../../components/StatusBadge";
import defaultProf from "../../assets/Logo/defaultProf.jpg";
import style from "./index.module.scss";
import { Button } from "react-bootstrap";
import { getReporterReportsList } from "../../redux/actions/reportActions";

const renderReportList = (reportListData) => {
  return reportListData.map((report, idx) => {
    return (
      <tr key={idx} className={style.tableDataRow}>
        <td className={style.tableData}>{report.concern}</td>
        <td className={style.tableData}>
          <span>{moment(report.updatedAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(report.updatedAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <span>{moment(report.createdAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(report.createdAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={report.status.toUpperCase()} />
        </td>
      </tr>
    );
  });
};

const ReporterReportsList = ({ clientID, itemsPerPage }) => {
  const headerNames = ["Concern", "Last Modified", "Date Submitted", "Status"];

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
  const { reporterReportsListData, reporterReportsListError } = useSelector(
    (state) => state.report
  );

  useEffect(() => {
    dispatch(getReporterReportsList(clientID));
  }, [dispatch]);

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(reporterReportsListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(reporterReportsListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, reporterReportsListData]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % reporterReportsListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="card">
        <DataTable
          tableTitle="User Reports and Concerns"
          headerNames={headerNames}
          renderData={() => renderReportList(currentItems)}
          sortItems={null}
          filterItems={null}
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
      <div className="card">
        <div className={style.flexedContainer}>
          <h1 className="m-auto">No Data Preview Available </h1>
        </div>
      </div>
    );
  }
};

const PaginatedReporterReportsList = (clientID) => {
  return (
    <div>{<ReporterReportsList clientI={clientID} itemsPerPage={10} />}</div>
  );
};

export default PaginatedReporterReportsList;
