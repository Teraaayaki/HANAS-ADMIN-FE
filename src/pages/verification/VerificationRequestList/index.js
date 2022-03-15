import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { GoKebabVertical } from 'react-icons/go';
import { MdOutlineDeleteOutline } from 'react-icons/md';

import style from './index.module.scss';

const requests = [
  {
    id: 1,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'ACCEPTED'
  },
  {
    id: 2,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'John Angelo S. Alegre',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 3,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'James Karl Sia',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'ACCEPTED'
  },
  {
    id: 4,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Hosea Barriga',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 5,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'James Bond',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'REJECTED'
  },
  {
    id: 2,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Louise Lane',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 3,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Peter Parker',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'REJECTED'
  },
  {
    id: 4,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Russel John De Castro',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  }
];

const renderVerificationRequests = () => {
  return requests.map((request, idx) => {
    return (
      <tr key={idx} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={request.pp}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/verification-requests/${request.id}`}>
            <span>Request for Verification</span>
          </Link>
        </td>
        <td className={style.tableData}>
          <span>{request.name}</span>
        </td>
        <td className={style.tableData}>
          <span>{request.date}</span>
          <span className={style.time}>{request.time}</span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={request.status} />
        </td>
        <td className={style.tableData}>
          <MdOutlineDeleteOutline size={25} className={style.deleteIcon} />
        </td>
      </tr>
    );
  });
};

const VerificationRequestList = () => {
  const headerNames = [
    'Verification Requests',
    'Name',
    'Date',
    'Request Status'
  ];

  return (
    <div className="main-content">
      <DataTable
        tableTitle="All Requests"
        headerNames={headerNames}
        renderData={renderVerificationRequests}
      />
    </div>
  );
};

export default VerificationRequestList;
