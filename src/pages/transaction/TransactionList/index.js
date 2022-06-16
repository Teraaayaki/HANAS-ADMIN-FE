import React, { useState } from 'react';
import { GoKebabVertical } from 'react-icons/go';

import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import TransactionDetail from '../TransactionDetail';
import style from './index.module.scss';

const transactions = [
  {
    id: 1,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'FINISHED'
  },
  {
    id: 2,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'ONGOING'
  },
  {
    id: 3,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'FINISHED'
  },
  {
    id: 4,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'ONGOING'
  },
  {
    id: 5,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'FINISHED'
  },
  {
    id: 6,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'ONGOING'
  },
  {
    id: 7,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'FINISHED'
  },
  {
    id: 8,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'FINISHED'
  },
  {
    id: 9,
    client_name: 'José Protacio Rizal Mercado',
    worker_name: 'Mary Therese Sun Alegre',
    address: 'Deca Homes, Tungkil, Minglanilla, Cebu',
    service: 'Plumbing',
    payment: 1500,
    time: '6:30 PM',
    status: 'ONGOING'
  }
];

const TransactionList = () => {
  const [showTransactionDets, setShowTransactionDets] = useState(false);

  const headerNames = [
    'Client Name',
    'Worker Name',
    'Address',
    'Service',
    'Payment',
    'Status'
  ];

  const renderTransactionsList = () => {
    return transactions.map((transaction, idx) => {
      return (
        <tr
          key={idx}
          onClick={() => {
            setShowTransactionDets(true);
          }}
          className={`${style.tableDataRow} ${style.clickable}`}
        >
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.client_name}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.worker_name}</span>
          </td>
          <td className={style.tableData}>
            <span className={style.truncate}>{transaction.address}</span>
          </td>
          <td className={style.tableData}>
            <span>{transaction.service}</span>
          </td>
          <td className={style.tableData}>
            <span>₱ {transaction.payment}.00</span> <br />
            <span className={style.time}> {transaction.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={transaction.status} />
          </td>
          <td className={style.tableData}>
            <GoKebabVertical />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="main-content">
      <TransactionDetail
        show={showTransactionDets}
        handleClose={() => setShowTransactionDets(false)}
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
