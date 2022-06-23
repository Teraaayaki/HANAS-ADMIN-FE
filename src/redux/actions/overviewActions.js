import { OverviewActions } from './types';
import OverviewAPI from '../../api/Overview';

export const hanasIncome = () => (dispatch) => {
    OverviewAPI.income()
    .then(({ data }) => {
      dispatch({ type: OverviewActions.OVERVIEW_INCOME_DATA, payload: data.incomeReport });
    })
    .catch((error) => {
      console.log(error);
    });
};
