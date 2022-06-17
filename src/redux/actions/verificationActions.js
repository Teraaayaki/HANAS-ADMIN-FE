import { VerificationAPI } from "../../api/Verification";
import { VerificationActions } from './types';

export const resetSuccess = () => async (dispatch) => {
    dispatch({
        type: VerificationActions.VERIFICATION_RESET_SUCCESS,
      });
};

export const resetError = () => async (dispatch) => {
    dispatch({
        type: VerificationActions.VERIFICATION_RESET_ERROR,
      });
};

export const getVerificationList = () => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

    VerificationAPI.getVerification().then(({data}) => {

        dispatch({ type: VerificationActions.VERIFICATION_DETAILS, payload: data.verifications });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    })
      
};

export const getSpecificVerification = (requestID) => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

    VerificationAPI.getSpecificVerification(requestID).then(({data}) => {
        dispatch({ type: VerificationActions.VERIFICATION_DETAILS, payload: data.specific_verification });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    });
};

export const acceptSpecificVerification = (id) => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

      VerificationAPI.acceptVerification(id).then( () => {

        dispatch({ type: VerificationActions.VERIFICATION_SUCCESS, payload: "Successfully accepted verification" });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    });
    
}

export const rejectSpecificVerification = (id) => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

    VerificationAPI.rejectVerification(id).then( () => {

        dispatch({ type: VerificationActions.VERIFICATION_SUCCESS, payload: "Successfully rejected verification" });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    });

}

export const removeSpecificVerification = (id) => async (dispatch) => {

    dispatch({
        type: VerificationActions.VERIFICATION_LOADING,
      });

    VerificationAPI.removeVerification(id).then( () => {

        dispatch({ type: VerificationActions.VERIFICATION_SUCCESS, payload: "Successfully removed" });

    }).catch( (error) => {
        console.log(error);
        dispatch({ type: VerificationActions.VERIFICATION_FAIL, payload: error?.response?.data?.error });
    });

}