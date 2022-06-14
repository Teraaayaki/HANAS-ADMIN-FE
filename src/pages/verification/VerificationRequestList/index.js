import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import DataTable from '../../../components/Table';
import StatusBadge from '../../../components/StatusBadge';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { getVerificationList } from "../../../redux/actions/verificationActions.js";
import moment from "moment";

import style from './index.module.scss';

const renderVerificationRequestList = (verificationData) => {
  return verificationData.map((verificationData, idx) => {
    return (
      <tr key={verificationData._id} className={style.tableDataRow}>
        <td className={style.tableData}>
          <img
            className={style.profilePic}
            src={verificationData.profile_pic}
            alt="&nbsp; Profile Pic"
          />
          <Link to={`/verification-requests/${verificationData._id}`}>
            <span className={style.truncate}>Request for Verification</span>
          </Link>
        </td>
        <td className={style.tableData}>
          <span>{verificationData.name}</span>
        </td>
        <td className={style.tableData}>
          <span>{moment(verificationData.createdAt).format('LL')}</span> <br />
          <span className={style.time}>{moment(verificationData.createdAt).format('LT')}</span>
        </td>
        <td className={style.tableData}>
          <StatusBadge status={verificationData.verify_status.toUpperCase()} />
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

  const dispatch = useDispatch();

  const { verificationData } = useSelector((state) => state.verification);

  useEffect(() => {

    dispatch(getVerificationList());

  }, []);

  return (
    <div className="main-content">
      <DataTable
        tableTitle="All Requests"
        headerNames={headerNames}
        renderData={() => renderVerificationRequestList(verificationData)}
      />
    </div>
  );
};

export default VerificationRequestList;
