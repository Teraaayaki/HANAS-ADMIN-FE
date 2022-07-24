import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import style from './index.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { getConvFeeList } from "../../../redux/actions/convFeeActions";
import moment from 'moment';

const transactions = [
    {
        name: 'Renzo Lebumfacil',
        last_activity_date: 'June 6, 2022',
        remaining_bal: '500.00',
        time: '5:59 PM',
        status: 'PENDING',
    },
    {
        name: 'James Karl Sia',
        last_activity_date: 'August 15, 2021',
        remaining_bal: '300.00',
        time: '6:21 PM',
        status: 'PAID',
    },
  ];
const TransactionFeeList = ({ itemsPerPage }) => {
  //PAGINATION STATES
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


//   const { transactions } = useSelector((state) => state.transaction);

const { convFeeListData } = useSelector((state) => state.convenience);

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
    const newOffset = (event.selected * itemsPerPage) % transactions.length;
    setItemOffset(newOffset);
  };
  
//   const handleSortTransaction = (e) => {
//     dispatch(sortTransaction(e));
//   };

  const sortItems = [];

  const filterItems = [];

  const renderTransactionFeeList = (transactions) => {
    return transactions.map((transaction, idx) => {
      return (
        <tr
          key={transaction._id}
          className={`${style.tableDataRow} ${style.clickable}`}
        >
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.name}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.last_activity_date}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.remaining_bal}</span>
            <span className={style.time}>{transaction.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={transaction.status} />
          </td>
          <td className={style.tableData}>
            <FaCheckCircle className={style.iconGreen} onClick={ () => console.log("I was clicked")}/>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    dispatch(getConvFeeList());
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
