import { OverviewActions } from '../actions/types';

const OVERVIEW_INITIAL_STATE = {
  incomeData : [],
};

const overviewReducer = (state = OVERVIEW_INITIAL_STATE, action) => {
  switch (action.type) {
    case OverviewActions.OVERVIEW_INCOME_DATA:
      return {
        ...state,
        incomeData: action.payload,
      };
    default:
      return state;
  }
};

export default overviewReducer;
