import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OverviewCard from '../../components/Card';
import LineGraph from '../../components/LineGraph';
import ActivePieChart from '../../components/ActivePieChart';
import ColoredPieChart from '../../components/ColoredPieChart';
import moment from "moment";

import style from './index.module.scss';
import { 
  hanasIncome, 
  hanasVerifiedWorkers, 
  hanasUserTypes, 
  hanasTotalusers, 
  hanasPendingVerifications
} from '../../redux/actions/overviewActions';



const Overview = () => {

  const dispatch = useDispatch();
  const {verifiedData, typeOfUserData, totalUser, pendingVerifications} = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch(hanasIncome());
    dispatch(hanasVerifiedWorkers());
    dispatch(hanasUserTypes());
    dispatch(hanasTotalusers());
    dispatch(hanasPendingVerifications());
  }, [dispatch]);

  return (
    <div className="main-content">
      <div className={style.container}>
        <section className={style.upperCards}>
          <OverviewCard cardTitle="Pending Verifications" count={pendingVerifications} />
          <OverviewCard cardTitle="Pending Reports" count="43" />
          <OverviewCard cardTitle="Total Users" count={totalUser} />
          {/* <OverviewCard cardTitle="Total Visits" count="155" /> */}
        </section>
        <section className={style.mainCard}>
          {/*LINE GRAPH*/}
          <div className={style.graphContainer}>
            <h6 className={style.graphTitle}>Income Evaluation</h6>
            <div className={style.timeInfo}>
              <span className={style.graphTime}>
                as of {moment().calendar()}
              </span>
              <span className={style.graphTime}>Today</span>
            </div>
            <LineGraph />
          </div>
          <div className={style.flexedRow}>
            {/*ACTIVE PIE CHART*/}
            <div className={style.graphContainer}>
              <h6 className={style.graphTitle}>Percentage of Verified Skilled Workers</h6>
              <div className={style.timeInfo}>
                <span className={style.graphTime}>
                  as of {moment().calendar()}
                </span>
              </div>
              <ActivePieChart data={verifiedData}/>
            </div>

            {/*COLORED PIE CHART*/}
            <div className={style.graphContainer}>
              <h6 className={style.graphTitle}>Percentage of Workers and Clients</h6>
              <div className={style.timeInfo}>
                <span className={style.graphTime}>
                  as of {moment().calendar()}
                </span>
              </div>
              <ColoredPieChart data={typeOfUserData}/>
            </div>
          </div>
          
          
          {/* <div className={style.analytics}>
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
          </div> */}
        </section>
        <div className={style.spacer}></div>
      </div>
    </div>
  );
};

export default Overview;
