import React from 'react';
import OverviewCard from '../../components/Card';

import style from './index.module.scss';

const Overview = () => {
  return (
    <div className="main-content">
      <div className={style.container}>
        <section className={style.upperCards}>
          <OverviewCard cardTitle="Pending Verifications" count="60" />
          <OverviewCard cardTitle="Pending Reports" count="43" />
          <OverviewCard cardTitle="Total Users" count="43" />
          <OverviewCard cardTitle="Total Visits" count="155" />
        </section>
        <section className={style.mainCard}>
          <div className={style.graphContainer}>
            <h6 className={style.graphTitle}>Today's trends</h6>
            <div className={style.timeInfo}>
              <span className={style.graphTime}>
                as of 25 May 2019, 09:41pm
              </span>
              <span className={style.graphTime}>Today</span>
            </div>
            <div className={style.graph}></div>
          </div>
          <div className={style.analytics}>
            <div className={style.analyticCard}>
              <h6 className={style.analyticTitle}>Total Visits (Today)</h6>
              <span className={style.analyticResult}>51</span>
            </div>
            <div className={style.analyticCard}>
              <h6 className={style.analyticTitle}>Total Active Users</h6>
              <span className={style.analyticResult}>23</span>
            </div>
            <div className={style.analyticCard}>
              <h6 className={style.analyticTitle}>Average Visits</h6>
              <span className={style.analyticResult}>12</span>
            </div>
            <div className={style.analyticCard}>
              <h6 className={style.analyticTitle}>Average Response Time</h6>
              <span className={style.analyticResult}>3h 8m</span>
            </div>
            <div className={style.analyticCard}>
              <h6 className={style.analyticTitle}>User Registration Rate</h6>
              <span className={style.analyticResult}>94%</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
