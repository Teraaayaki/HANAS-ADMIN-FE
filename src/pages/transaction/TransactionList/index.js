import React, { useState, useEffect } from 'react';
import { GoKebabVertical } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import TransactionDetail from '../TransactionDetail';
import style from './index.module.scss';
import { getTransactionList } from "../../../redux/actions/transactionActions";
import moment from 'moment';

// const transactions = [
//   {
//     id: 1,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'FINISHED'
//   },
//   {
//     id: 2,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'ONGOING'
//   },
//   {
//     id: 3,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'FINISHED'
//   },
//   {
//     id: 4,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'ONGOING'
//   },
//   {
//     id: 5,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'FINISHED'
//   },
//   {
//     id: 6,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'ONGOING'
//   },
//   {
//     id: 7,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'FINISHED'
//   },
//   {
//     id: 8,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'FINISHED'
//   },
//   {
//     id: 9,
//     client_name: 'José Protacio Rizal Mercado',
//     worker_name: 'Mary Therese Sun Alegre',
//     address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
//     service: 'Plumbing',
//     payment: 1500,
//     time: '6:30 PM',
//     status: 'ONGOING'
//   }
// ];

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

  console.log("TRANSACTION", transactions);

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
  
  console.log("SPECIFIC DETAIL FROM LIST", specificDetail);

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
        />
      </div>
    );
};

export default TransactionList;
