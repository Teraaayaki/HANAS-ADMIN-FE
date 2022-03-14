import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { GoKebabVertical } from 'react-icons/go';

import style from './index.module.scss';

const skilledworkers = [
  {
    id: 1,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    address: 'Bogo City, Cebu',
    services: 'Plumbing, Electrical, Cleaning',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 2,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'General Salipada K. Pendatun',
    address: 'Cebu City, Cebu',
    services: 'Plumbing, Electrical, Carpentry, Cleaning',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    id: 3,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Robert Downey',
    address: 'Mandaue City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'UNVERIFIED'
  },
  {
    id: 4,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Christian Bale',
    address: 'P2 Blk3 Lot18 Deca Home Tungkil Minglanilla, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 5,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Henry Cavil',
    address: 'Daanbantayan City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    id: 6,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Blake Lively',
    address: 'Carcar City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'September 26, 2022',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    id: 7,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Christian Bale',
    address: 'Danao City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 8,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Henry Cavil',
    address: 'Daanbantayan City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    id: 9,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'José Protacio Rizal Mercado y Alonso Realonda',
    address: 'Carcar City, Cebu',
    services: 'Plumbing, Electrical',
    member_since: 'September 26, 2022',
    time: '6:30 PM',
    status: 'VERIFIED'
  }
];

const SkilledWorkerList = () => {
  const headerNames = [
    'Name',
    'Address',
    'Services',
    'Member Since',
    'Account Status'
  ];

  const renderClientListData = () => {
    return skilledworkers.map((skilledworker, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={skilledworker.pp}
              alt="&nbsp; Profile Pic"
            />
            <Link to={`/skilledworkers/${skilledworker.id}`}>
              <span>{skilledworker.name}</span>
            </Link>
          </td>
          <td className={style.tableData}>
            <span>{skilledworker.address}</span>
          </td>
          <td className={style.tableData}>
            <span>{skilledworker.services}</span>
          </td>
          <td className={style.tableData}>
            <span>{skilledworker.member_since}</span>
            <span className={style.time}>{skilledworker.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={skilledworker.status} />
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
      <DataTable
        tableTitle="Details"
        headerNames={headerNames}
        renderData={renderClientListData}
      />
    </div>
  );
};

export default SkilledWorkerList;
