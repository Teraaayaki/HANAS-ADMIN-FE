import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getReporterReportsList,
  sortReporterReports,
  filterReporterReports,
} from "../../redux/actions/reportActions";

import DataTable from "../../components/Table";
import StatusBadge from "../../components/StatusBadge";
import style from "./index.module.scss";

const renderReportList = (reporterReportsListData) => {
  return reporterReportsListData.length > 0 ? (
    reporterReportsListData.map((report, idx) => {
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

const ReporterReportsList = ({
  reporterReportsListData,
  itemsPerPage,
  // clientID,
}) => {
  const headerNames = ["Concern", "Last Updated", "Date Submitted", "Status"];

  // Pagination States & Hooks
  let { clientID } = useParams();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();

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

  //Vars
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % reporterReportsListData.length;
    setItemOffset(newOffset);
  };

  const sortItems = [
    {
      name: "Default (Date Submitted)",
      event_key: "createdAt",
      onClick: () => {
        dispatch(sortReporterReports({ choice: "createdAt", clientID }));
      },
    },
    {
      name: "Concern (A-Z)",
      event_key: "concern",
      onClick: () => {
        dispatch(sortReporterReports({ choice: "concern", clientID }));
      },
    },
    {
      name: "Last Updated",
      event_key: "updatedAt",
      onClick: () => {
        dispatch(sortReporterReports({ choice: "updatedAt", clientID }));
      },
    },
  ];

  const filterItems = [
    {
      name: "Default (All)",
      event_key: "all",
      onClick: () => {
        dispatch(filterReporterReports({ choice: "All", clientID }));
      },
    },
    {
      name: "Resolved",
      event_key: "resolved",
      onClick: () => {
        dispatch(filterReporterReports({ choice: "Resolved", clientID }));
      },
    },
    {
      name: "Pending",
      event_key: "pending",
      onClick: () => {
        dispatch(filterReporterReports({ choice: "Pending", clientID }));
      },
    },
    {
      name: "Rejected",
      event_key: "rejected",
      onClick: () => {
        dispatch(filterReporterReports({ choice: "Rejected", clientID }));
      },
    },
  ];

  if (currentItems !== null) {
    return (
      <div className="card">
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
