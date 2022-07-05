import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";

import { getReportList } from "../../redux/actions/reportActions";
import DataTable from "../../components/Table";
import StatusBadge from "../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";
import style from "./index.module.scss";

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
          <Link to={`/clients/${report.reporterData[0]._id}`}>
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
            <Link to={`/clients/${report.reported_user[0]._id}`}>
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
          <span>{report.concern}</span>
        </td>
        <td className={style.tableData}>
          <span>{moment(report.createdAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(report.createdAt).format("LT")}
          </span>
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

  const dispatch = useDispatch();
  const { reportListData, error } = useSelector((state) => state.report);

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

  console.log("List", reportListData);

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
