import React from 'react';
import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { GoKebabVertical } from 'react-icons/go';

import style from './index.module.scss';

const clients = [
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    address: 'Bogo City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'General Salipada K. Pendatun',
    address: 'Cebu City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Robert Downey',
    address: 'Mandaue City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'UNVERIFIED'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Christian Bale',
    address: 'Danao City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Henry Cavil',
    address: 'Daanbantayan City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Blake Lively',
    address: 'Carcar City, Cebu',
    member_since: 'September 26, 2022',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Christian Bale',
    address: 'Danao City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Henry Cavil',
    address: 'Daanbantayan City, Cebu',
    member_since: 'May 26, 2019',
    time: '6:30 PM',
    status: 'VERIFIED'
  },
  {
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Blake Lively',
    address: 'Carcar City, Cebu',
    member_since: 'September 26, 2022',
    time: '6:30 PM',
    status: 'VERIFIED'
  }
];

const ClientList = () => {
  const headerNames = ['Name', 'Address', 'Member Since', 'Account Status'];

  const renderClientListData = () => {
    return clients.map((client, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={client.pp}
              alt="profile pic"
            />
            <span>{client.name}</span>
          </td>
          <td className={style.tableData}>
            <span>{client.address}</span>
          </td>
          <td className={style.tableData}>
            <span>{client.member_since}</span>
            <span className={style.time}>{client.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={client.status} />
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
      <DataTable headerNames={headerNames} renderData={renderClientListData} />
    </div>
  );
};

export default ClientList;
