import { transactionActions } from '../actions/types';

const TRANSACTION_INITIAL_STATE = {
  success: false,
  transactions: [],
  error: undefined,
};

const transactionReducer = (state = TRANSACTION_INITIAL_STATE, action) => {
  switch (action.type) {
    case transactionActions.TRANSACTION_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case transactionActions.TRANSACTION_DETAILS:
      return {
        ...state,
        transactions: action.payload,
      };
    case transactionActions.TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default transactionReducer;
