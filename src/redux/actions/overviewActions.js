import { OverviewActions } from './types';
import OverviewAPI from '../../api/Overview';

export const hanasTotalusers = () => (dispatch) => {
  OverviewAPI.totalUsers().then( ({ data }) => {
    dispatch({ type: OverviewActions.OVERVIEW_TOTAL_USER, payload: data.total_users})
  })
  .catch( (error) => {
    console.log(error);
  });
};

export const hanasPendingVerifications = () => (dispatch) => {
  OverviewAPI.pendingVerifications().then( ({ data }) => {
    dispatch({ type: OverviewActions.OVERVIEW_PENDING_VERIFICATIONS, payload: data.pendingVerifications});
  })
  .catch( (error) => {
    console.log(error);
  });
};

export const hanasIncome = () => (dispatch) => {
    OverviewAPI.income()
    .then(({ data }) => {
      dispatch({ type: OverviewActions.OVERVIEW_INCOME_DATA, payload: data.incomeReport });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const hanasVerifiedWorkers = () => (dispatch) => {
  OverviewAPI.verified().then( ({ data }) => {
    dispatch({ type: OverviewActions.OVERVIEW_VERIFIED_DATA, payload: data.percentageReportOfVerifiedWorkers});
  })
  .catch( (error) => {
    console.log(error);
  });
};

export const hanasUserTypes = () => (dispatch) => {
  OverviewAPI.userType().then( ({ data }) => {
    dispatch({ type: OverviewActions.OVERVIEW_TYPE_OF_USER_DATA, payload: data.percentageReportOfUserTypes});
  })
  .catch( (error) => {
    console.log(error);
  }) 
};
