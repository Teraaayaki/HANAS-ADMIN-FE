import VerificationAPI from "../../api/Verification";
import { VerificationActions } from './types';

export const getVerificationList = () => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

    VerificationAPI.getVerification().then(({data}) => {

        dispatch({ type: VerificationActions.VERIFICATION_DETAILS, payload: data.verifications });

        dispatch({ type: VerificationActions.VERIFICATION_SUCCESS });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    })

    

      
};