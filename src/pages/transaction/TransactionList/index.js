import React, { useState, useEffect } from 'react';
import { GoKebabVertical } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import TransactionDetail from '../TransactionDetail';
import style from './index.module.scss';
import { getTransactionList, sortTransaction} from "../../../redux/actions/transactionActions";
import moment from 'moment';

const TransactionList = () => {
  const [showTransactionDets, setShowTransactionDets] = useState(false);
  const [specificDetail, setSpecificDetail] = useState([]);
  const { transactions } = useSelector((state) => state.transaction);

  const dispatch = useDispatch();

  const headerNames = [
    'Client Name',
    'Worker Name',
    'Address',
    'Service',
    'Payment',
    'Status'
  ];

  const handleSortTransaction = (e) => {
    dispatch(sortTransaction(e));
  };

  const sortItems = [
    {
      name: 'Total Cost',
      event_key: 'cost',
      onClick: () => { dispatch(handleSortTransaction('cost'))}
    },
    {
      name: 'Booking Start Date',
      event_key: 'date',
      onClick: () => { dispatch(handleSortTransaction('date'))}
    },
    {
      name: 'Service Type',
      event_key: 'service',
      onClick: () => { dispatch(handleSortTransaction('service'))}
    }
  ];

  const filterItems = []

  const renderTransactionsList = () => {
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
            <span className={style.truncate}>{`${transaction.clientData[0].first_name} ${transaction.clientData[0].middle_name} ${transaction.clientData[0].family_name}`}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{`${transaction.workerData[0].first_name} ${transaction.workerData[0].middle_name} ${transaction.workerData[0].family_name}`}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.clientData[0].address}</span>
          </td>
          <td className={style.tableData}>
            <span>{transaction.myServiceData[0].serviceData[0].service_type}</span>
          </td>
          <td className={style.tableData}>
            <span>₱ {transaction.total_cost.toFixed(2)}</span> <br />
            <span className={style.time}> {moment(transaction.booked_dateTimeStart).format('LL')}</span>
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
   }, []);
  
    return (
      <div className="main-content">
        <TransactionDetail
          show={showTransactionDets}
          handleClose={() => setShowTransactionDets(false)}
          data={specificDetail.length === 0 ? null: specificDetail}
        />
        <DataTable
          tableTitle="Details"
          headerNames={headerNames}
          renderData={renderTransactionsList}
          sortItems={sortItems}
          filterItems={filterItems}
        />
      </div>
    );
};

export default TransactionList;
