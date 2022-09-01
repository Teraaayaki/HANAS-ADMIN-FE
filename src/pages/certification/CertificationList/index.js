import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";

import {
  getCertificationList,
  sortCertification,
  filterCertification,
} from "../../../redux/actions/certificationActions";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import defaultProf from "../../../assets/Logo/defaultProf.jpg";
import style from "./index.module.scss";

const renderRatingText = (feedbackData) => {
  if (feedbackData && feedbackData[0] !== undefined) {
    return <span>{feedbackData[0].rateAvg.toFixed(1)} / 5.0 ⭐</span>;
  } else {
    return <span> N/A</span>;
  }
};

const renderCertificationList = (certificationListData) => {
  return certificationListData.map((certification, idx) => {
    return (
      <tr key={certification._id} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={
              certification.workerData[0].profile_pic
                ? certification.workerData[0].profile_pic
                : defaultProf
            }
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/certification-requests/${certification._id}`}>
            <span className={style.truncate}>
              {certification.workerData[0].name}
            </span>
          </Link>
        </td>
        <td className={style.tableData}>
          <span>{certification.serviceData[0].service_type}</span>
        </td>
        <td className={style.tableData}>
          {renderRatingText(certification.feedbackData)}
        </td>
        <td className={style.tableData}>
          {certification.feedbackData &&
          certification.feedbackData[0] !== undefined ? (
            <span>{certification.feedbackData[0].jobs}</span>
          ) : (
            <span>0</span>
          )}
        </td>
        <td className={style.tableData}>
          <span>{moment(certification.updatedAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(certification.updatedAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={certification.is_certified.toUpperCase()} />
        </td>
        {/* <td className={style.tableData}>
          <GoKebabVertical />
        </td> */}
      </tr>
    );
  });
};

const CertificationList = ({ itemsPerPage }) => {
  const headerNames = [
    "Name",
    "Service",
    "Rating",
    "Voted",
    "Last Updated",
    "Request Status",
  ];

  const handleSortClient = (e) => {
    console.log(e);
    dispatch(sortCertification(e));
  };

  const handleFilterClient = (e) => {
    dispatch(filterCertification(e));
  };

  const sortItems = [
    {
      name: "Default",
      event_key: "all",
      onClick: () => {
        dispatch(handleSortClient("all"));
      },
    },
    {
      name: "Name (A-Z)",
      event_key: "name",
      onClick: () => {
        dispatch(handleSortClient("name"));
      },
    },
    {
      name: "Date of Account Creation",
      event_key: "date",
      onClick: () => {
        dispatch(handleSortClient("date"));
      },
    },
  ];

  const filterItems = [
    {
      name: "All",
      event_key: "all",
      onClick: () => {
        dispatch(handleFilterClient("all"));
      },
    },
    {
      name: "Pending",
      event_key: "Pending",
      onClick: () => {
        dispatch(handleFilterClient("Pending"));
      },
    },
    {
      name: "Accepted",
      event_key: "Accepted",
      onClick: () => {
        dispatch(handleFilterClient("Accepted"));
      },
    },
    {
      name: "Rejected",
      event_key: "Rejected",
      onClick: () => {
        dispatch(handleFilterClient("Rejected"));
      },
    },
  ];

  const dispatch = useDispatch();
  const { certificationListData } = useSelector((state) => state.certification);

  useEffect(() => {
    dispatch(getCertificationList());
  }, [dispatch]);

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(certificationListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(certificationListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, certificationListData]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % certificationListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="main-content">
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={() => renderCertificationList(currentItems)}
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
          <Button
            className="m-auto"
            variant="dark"
            href="/admin/certification-requests"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }
};

const PaginatedCertificationList = () => {
  return <div>{<CertificationList itemsPerPage={10} />}</div>;
};

export default PaginatedCertificationList;
