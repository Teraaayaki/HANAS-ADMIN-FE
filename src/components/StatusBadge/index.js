import React from 'react';

import style from './index.module.scss';

const StatusBadge = ({ status }) => {
  const badgeColor = () => {
    switch (status) {
      case 'VERIFIED':
      case 'ACCEPTED':
      case 'FINISHED':
      case 'RESOLVED':
        return style.green;
      case 'UNVERIFIED':
      case 'REJECTED':
        return style.red;
      default:
        return style.yellow;
    }
  };

  return <div className={badgeColor()}>{status}</div>;
};

export default StatusBadge;
