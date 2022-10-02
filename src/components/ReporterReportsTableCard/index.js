import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";
import { GoKebabVertical } from "react-icons/go";

import { filterReport, sortReport } from "../../redux/actions/reportActions";
import DataTable from "../../components/Table";
import StatusBadge from "../../components/StatusBadge";
import style from "./index.module.scss";
import { Button } from "react-bootstrap";

const renderReportList = (reportListData) => {
  return reportListData.length > 0 ? (
    reportListData.map((report, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <Link to={`/user-reports/${report._id}`}>{report.concern}</Link>
          </td>
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
    })
  ) : (
    <tr className={style.tableDataRow}>
      <td className={style.tableData}>No Data Available</td>
    </tr>
  );
};

const ReporterReportsList = ({ reporterReportsListData, itemsPerPage }) => {
  const headerNames = ["Concern", "Last Modified", "Date Submitted", "Status"];

  const dispatch = useDispatch();

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

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      reporterReportsListData.reporterReportsListData.slice(
        itemOffset,
        endOffset
      )
    );
    setPageCount(
      Math.ceil(
        reporterReportsListData.reporterReportsListData.length / itemsPerPage
      )
    );
  }, [itemOffset, itemsPerPage, reporterReportsListData]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % reporterReportsListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null) {
    return (
      <div className="card">
        {console.log("Ni", reporterReportsListData)}
        <DataTable
          tableTitle="Reports and Concerns"
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
        <div className={style.flexedContainer}></div>
      </div>
    );
  }
};

const PaginatedReporterReportsList = (reporterReportsListData) => {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 50 }}>
      <ReporterReportsList
        reporterReportsListData={reporterReportsListData}
        itemsPerPage={10}
      />
    </div>
  );
};

export default PaginatedReporterReportsList;
