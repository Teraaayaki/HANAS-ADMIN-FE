import { ConvFeeActions } from "./types";
import convFeeAPI from "../../api/ConvenienceFee";

export const getConvFeeList = () => async (dispatch) => {
    convFeeAPI.getAllConvFeeTransaction().then(({data}) => {
        dispatch({ type: ConvFeeActions.CONV_FEE_LIST, payload: data.transactions});
    }).catch((error) => {
        console.log(error);
        dispatch({ type: ConvFeeActions.CONV_FEE_ERROR, payload: error?.response?.data?.error });
      });
};
