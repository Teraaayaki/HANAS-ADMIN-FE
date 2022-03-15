import React from 'react';

import style from './index.module.scss';

const OverviewCard = ({ cardTitle, count }) => {
  return (
    <div className={style.cardContainer}>
      <h6 className={style.cardTitle}>{cardTitle}</h6>
      <span className={style.count}>{count}</span>
    </div>
  );
};

export default OverviewCard;
