import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";
/*bootstrap module for easier styling for the pagination*/
import "bootstrap/dist/css/bootstrap.min.css";

import { getClientList } from "../../../redux/actions/clientActions";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import { GoKebabVertical } from "react-icons/go";

import style from "./index.module.scss";

const renderClientList = (clientListData) => {
  return clientListData.map((client, idx) => {
    return (
      <tr key={client._id} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={client.profile_pic}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/clients/${client._id}`}>
            <span className={style.truncate}>{client.name}</span>
          </Link>
        </td>
        <td className={style.tableData}>
          <span>{client.address}</span>
        </td>
        <td className={style.tableData}>
          <span>{moment(client.createdAt).format("LL")}</span> <br />
          <span className={style.time}>
            {moment(client.createdAt).format("LT")}
          </span>
        </td>
        <td className={style.tableData}>
          <StatusBadge
            status={client.is_deactivated ? "DEACTIVATED" : "ACTIVE"}
          />
        </td>
        <td className={style.tableData}>
          <GoKebabVertical />
        </td>
      </tr>
    );
  });
};

const ClientList = ({ itemsPerPage }) => {
  const headerNames = ["Name", "Address", "Member Since", "Account Status"];

  const dispatch = useDispatch();
  const { clientListData, error } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  // Pagination States & Hooks
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(clientListData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(clientListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, clientListData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % clientListData.length;
    setItemOffset(newOffset);
  };

  if (currentItems !== null && currentItems[0] !== undefined) {
    return (
      <div className="main-content">
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={() => renderClientList(currentItems)}
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

const PaginatedClientList = () => {
  return <div>{<ClientList itemsPerPage={1} />}</div>;
};

export default PaginatedClientList;
