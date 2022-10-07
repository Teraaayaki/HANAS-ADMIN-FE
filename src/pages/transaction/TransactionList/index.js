import React, { useState, useEffect } from "react";
import { GoKebabVertical } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

import ReactPaginate from "react-paginate";
import DataTable from "../../../components/Table";
import StatusBadge from "../../../components/StatusBadge";
import TransactionDetail from "../TransactionDetail";
import style from "./index.module.scss";
import {
  getTransactionList,
  sortTransaction,
} from "../../../redux/actions/transactionActions";
import moment from "moment";

const TransactionList = ({ itemsPerPage }) => {
  const [showTransactionDets, setShowTransactionDets] = useState(false);
  const [specificDetail, setSpecificDetail] = useState([]);

  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const { transactions } = useSelector((state) => state.transaction);

  const dispatch = useDispatch();

  const headerNames = [
    "Client Name",
    "Worker Name",
    "Address",
    "Service",
    "Payment",
    "Payment Due to Worker",
    "Gcash No. of Worker",
    "Payment Method",
    "Service Status",
    "Payment to Worker Status",
  ];

  //PAGINATION HANDLE
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transactions.length;
    setItemOffset(newOffset);
  };

  const handleSortTransaction = (e) => {
    dispatch(sortTransaction(e));
  };

  const sortItems = [
    {
      name: "Default",
      event_key: "all",
      onClick: () => {
        dispatch(handleSortTransaction("all"));
      },
    },
    {
      name: "Total Cost",
      event_key: "cost",
      onClick: () => {
        dispatch(handleSortTransaction("cost"));
      },
    },
    {
      name: "Booking Start Date",
      event_key: "date",
      onClick: () => {
        dispatch(handleSortTransaction("date"));
      },
    },
    {
      name: "Service Type",
      event_key: "service",
      onClick: () => {
        dispatch(handleSortTransaction("service"));
      },
    },
  ];

  const filterItems = [
    {
      name: "Default",
      event_key: "all",
      onClick: () => {
        dispatch(handleSortTransaction("all"));
      },
    },
    {
      name: "Gcash",
      event_key: "cost",
      onClick: () => {
        dispatch(handleSortTransaction("cost"));
      },
    },
    {
      name: "Cash",
      event_key: "date",
      onClick: () => {
        dispatch(handleSortTransaction("date"));
      },
    },
  ];

  const renderTransactionsList = (transactions) => {
    return transactions.map((transaction, idx) => {
      return (
        <tr
          key={transaction._id}
          onClick={() => {
            setShowTransactionDets(true);
            setSpecificDetail(transaction);
          }}
          className={`${style.tableDataRow} ${style.clickable}`}
        >
          <td className={style.tableData}>
            <span
              className={style.truncate}
            >{`${transaction.clientData[0].first_name} ${transaction.clientData[0].middle_name} ${transaction.clientData[0].family_name}`}</span>
          </td>
          <td className={style.tableData}>
            <span
              className={style.truncate}
            >{`${transaction.workerData[0].first_name} ${transaction.workerData[0].middle_name} ${transaction.workerData[0].family_name}`}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>
              {transaction.clientData[0].address}
            </span>
          </td>
          <td className={style.tableData}>
            <span>
              {transaction.myServiceData[0].serviceData[0].service_type}
            </span>
          </td>
          <td className={style.tableData}>
            <span>₱ {transaction.total_cost.toFixed(2)}</span> <br />
            <span className={style.time}>
              {" "}
              {moment(transaction.booked_dateTimeStart).format("LL")}
            </span>
          </td>
          <td className={style.tableData}>
            {/* prettier-ignore */}
            <span>
              ₱{" "}
              {transaction.total_cost.toFixed(2) -
                (transaction.total_cost.toFixed(2) * 0.08)}
            </span>{" "}
          </td>
          <td className={style.tableData}>
            <span>0{transaction.clientData[0].mobile_no}</span> <br />
          </td>
          <td className={style.tableData}>
            <span>GCash</span> <br />
            <span className={style.time}>
              {" "}
              {moment(transaction.updatedAt).format("LL")}
            </span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={transaction.book_status.toUpperCase()} />
          </td>
          <td className={style.tableData}>
            <StatusBadge status={transaction.book_status.toUpperCase()} />
          </td>
          <td className={style.tableData}>
            <GoKebabVertical />
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    dispatch(getTransactionList());
  }, [dispatch]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(transactions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(transactions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, transactions]);

  return (
    <div className="main-content">
      <TransactionDetail
        show={showTransactionDets}
        handleClose={() => setShowTransactionDets(false)}
        data={specificDetail.length === 0 ? null : specificDetail}
      />
      <DataTable
        tableTitle="Details"
        headerNames={headerNames}
        renderData={() => renderTransactionsList(currentItems)}
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
          containerClassName={
            "pagination"
          } /* as this work same as bootstrap class */
          subContainerClassName={
            "pages pagination"
          } /* as this work same as bootstrap class */
          activeClassName={"active"} /* as this work same as bootstrap class */
        />
      </div>
    </div>
  );
};

const PaginatedTransactionList = () => {
  return <div>{<TransactionList itemsPerPage={5} />}</div>;
};

export default PaginatedTransactionList;
