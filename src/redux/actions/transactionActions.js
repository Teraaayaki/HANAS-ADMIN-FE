import { transactionActions } from "./types";
import transactionAPI from "../../api/Transaction";

export const getTransactionList = () => async (dispatch) => {
  transactionAPI
    .getAllTransactions()
    .then(({ data }) => {
      dispatch({
        type: transactionActions.TRANSACTION_DETAILS,
        payload: data.transactions,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: transactionActions.TRANSACTION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const sortTransaction = (DATA) => async (dispatch) => {
  transactionAPI
    .sortTransaction(DATA)
    .then(({ data }) => {
      dispatch({
        type: transactionActions.TRANSACTION_DETAILS,
        payload: data.transactions,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: transactionActions.TRANSACTION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const filterTransaction = (DATA) => async (dispatch) => {
  transactionAPI
    .filterTransaction(DATA)
    .then(({ data }) => {
      dispatch({
        type: transactionActions.TRANSACTION_DETAILS,
        payload: data.transactions,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: transactionActions.TRANSACTION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
