import { ConvFeeActions } from "../actions/types";

const INITIAL_STATE = {
  convFeeListData: [],
  error: null,
  success: null,
  successMessage: '',
};

const convFeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ConvFeeActions.CONV_FEE_LIST:
        return {
          ...state,
          convFeeListData: action.payload,
        };
      case ConvFeeActions.CONV_FEE_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case ConvFeeActions.CONV_FEE_SUCCESS:
        return {
          ...state,
          success: true,
        };
      case ConvFeeActions.CONV_FEE_SUCCESS_MESSAGE:
        return {
          ...state,
          success: true,
          successMessage: 'Action has been successfully completed',
        };
      case ConvFeeActions.CONV_FEE_RESET_SUCCESS_MESSAGE:
        return {
          ...state,
          success: null,
          successMessage: '',
        };
      default:
        return state;
    }
  };

  export default convFeeReducer;