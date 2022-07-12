import { OverviewActions } from '../actions/types';

const OVERVIEW_INITIAL_STATE = {
  incomeData : [],
  verifiedData: [],
  typeOfUserData: [],
  totalUser: [],
  pendingVerifications: [],
  pendingReports: [],
};

const overviewReducer = (state = OVERVIEW_INITIAL_STATE, action) => {
  switch (action.type) {
    case OverviewActions.OVERVIEW_INCOME_DATA:
      return {
        ...state,
        incomeData: action.payload,
      };
    case OverviewActions.OVERVIEW_VERIFIED_DATA:
      return {
        ...state,
        verifiedData: action.payload,
      };
    case OverviewActions.OVERVIEW_TYPE_OF_USER_DATA:
      return {
        ...state,
        typeOfUserData: action.payload,
      };
    case OverviewActions.OVERVIEW_TOTAL_USER:
      return {
        ...state,
        totalUser: action.payload,
      };
    case OverviewActions.OVERVIEW_PENDING_VERIFICATIONS:
      return {
        ...state,
        pendingVerifications: action.payload,
      };
    case OverviewActions.OVERVIEW_PENDING_REPORTS:
      return {
        ...state,
        pendingReports: action.payload,
      };
    default:
      return state;
  }
};

export default overviewReducer;
