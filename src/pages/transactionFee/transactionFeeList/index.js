import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import style from './index.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { getConvFeeList, setConvFeeToPaid, resetSuccess, resetError } from "../../../redux/actions/convFeeActions";
import { ToastContainer, toast } from "react-toastify";
import moment from 'moment';

const TransactionFeeList = ({ itemsPerPage }) => {
  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

const { convFeeListData, success, successMessage, error } = useSelector((state) => state.convenience);

  const dispatch = useDispatch();

  const headerNames = [
    'Worker Name',
    'Last Activity Date',
    'Remaining Balance',
    'Status',
    'Actions'
  ];

  //PAGINATION HANDLE
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % convFeeListData.length;
    setItemOffset(newOffset);
  };
  
//   const handleSortTransaction = (e) => {
//     dispatch(sortTransaction(e));
//   };

const handlePayment = (amount, id) => {
  const DATA = {
    amount,
    id,
  }
  dispatch(setConvFeeToPaid(DATA));
};

  const sortItems = [];

  const filterItems = [];

  const renderTransactionFeeList = (convFeeListData) => {
    return convFeeListData.map((transaction, idx) => {
      return (
        <tr
          key={transaction._id}
          className={`${style.tableDataRow} ${style.clickable}`}
        >
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.worker.first_name} {transaction.worker.middle_name} {transaction.worker.family_name}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{moment(transaction.updatedAt).format('LL')}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>₱ {transaction.total_amount.toFixed(2)}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={transaction.total_amount === 0 ? 'PAID' : 'PENDING'} />
          </td>
          <td className={style.tableData}>
            <FaCheckCircle className={style.iconGreen} onClick={() => handlePayment(transaction.total_amount, transaction._id)}/>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    if (success) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetSuccess()),
      });
    }
  }, [dispatch, success, successMessage]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetError()),
      });
    }
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(getConvFeeList());
   }, [dispatch]);

  useEffect(() => {
  // Fetch items from another resources.
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(convFeeListData.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(convFeeListData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, convFeeListData]);

    return (
      <div className="main-content">
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={() => renderTransactionFeeList(currentItems)}
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
            containerClassName={'pagination'} /* as this work same as bootstrap class */
            subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
            activeClassName={'active'} /* as this work same as bootstrap class */
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
};

const PaginatedTransactionFeeList = () => {
  return (
    <div>
      {
          <TransactionFeeList itemsPerPage={10} />
      }
    </div>
    
  );
}

export default PaginatedTransactionFeeList;
