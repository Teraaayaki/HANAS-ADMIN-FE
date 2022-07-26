import { ConvFeeActions } from "./types";
import convFeeAPI from "../../api/ConvenienceFee";


export const resetSuccess = () => async (dispatch) => {
    dispatch({ type: ConvFeeActions.CONV_FEE_RESET_SUCCESS_MESSAGE});
};

export const resetError = () => async (dispatch) => {
    dispatch ({ type: ConvFeeActions.CONV_FEE_RESET_ERROR});
}

export const getConvFeeList = () => async (dispatch) => {
    convFeeAPI.getAllConvFeeTransaction().then(({data}) => {
        dispatch({ type: ConvFeeActions.CONV_FEE_LIST, payload: data.convFeeTransactions});
    }).catch((error) => {
        console.log(error);
        dispatch({ type: ConvFeeActions.CONV_FEE_ERROR, payload: error?.response?.data?.error });
      });
};

export const setConvFeeToPaid = (DATA) => async (dispatch) => {
    convFeeAPI.setConvFeeToPaid(DATA).then( () => {
        dispatch({ type: ConvFeeActions.CONV_FEE_SUCCESS});
        dispatch({ type: ConvFeeActions.CONV_FEE_SUCCESS_MESSAGE});
    }).catch ( (error) => {
        console.log(error);
        dispatch({ type: ConvFeeActions.CONV_FEE_ERROR, payload: error?.response?.data?.error});
    });
};

export const sortConvenienceFee = (DATA) => async (dispatch) => {
    convFeeAPI.sortConvFee(DATA).then( ({data}) => {
        dispatch({ type: ConvFeeActions.CONV_FEE_LIST, payload: data.convFeeTransactions});
    }).catch( (error) => {
        console.log(error);
        dispatch({ type: ConvFeeActions.CONV_FEE_ERROR, payload: error?.response?.data?.error});
    });
};

export const filterConvenienceFee = (DATA) => async (dispatch) => {
    convFeeAPI.filterConvFee(DATA).then( ({data}) => {
        dispatch({ type: ConvFeeActions.CONV_FEE_LIST, payload: data.convFeeTransactions});
    }).catch( (error) => {
        console.log(error);
        dispatch({ type: ConvFeeActions.CONV_FEE_ERROR, payload: error?.response?.data?.error});
    });
};
