import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../components/Table';
import StatusBadge from '../../components/StatusBadge';
import { GoKebabVertical } from 'react-icons/go';

import style from './index.module.scss';

const reports = [
  {
    id: 1,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 2,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 3,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'PENDING'
  },
  {
    id: 4,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 5,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 6,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 7,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 8,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  },
  {
    id: 9,
    pp: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
    name: 'Mary Therese Sun Alegre',
    details: 'Adding images to featured posts',
    date: 'May 26, 2019',
    time: '6:30 PM',
    status: 'RESOLVED'
  }
];
const UserReport = () => {
  const headerNames = ['Name', 'Ticket Details', 'Date', 'Status'];

  const renderReportList = () => {
    return reports.map((report, idx) => {
      return (
        <tr key={idx} className={style.tableDataRow}>
          <td className={style.tableData}>
            <img
              className={style.profilePic}
              src={report.pp}
              alt="&nbsp; Profile Pic"
            />
            <Link to={`/user-reports/${report.id}`}>
              <span className={style.truncate}>{report.name}</span>
            </Link>
          </td>
          <td className={style.tableData}>
            <span>{report.details}</span>
          </td>
          <td className={style.tableData}>
            <span>{report.date}</span> <br />
            <span className={style.time}> {report.time}</span>
          </td>
          <td className={style.tableData}>
            <StatusBadge status={report.status} />
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
        tableTitle="Reports and Concerns"
        headerNames={headerNames}
        renderData={renderReportList}
      />
    </div>
  );
};

export default UserReport;
