import { CertificationActions } from "./types";
import CertificationAPI from "../../api/Certification";

export const getCertificationList = () => async (dispatch) => {
  CertificationAPI.getCertificationList()
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST,
        payload: data.certificationList,
      });
    })
    .catch((error) => {
      console.log("GetCertificationList " + error);
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getCertification = (certificationID) => async (dispatch) => {
  CertificationAPI.getCertification(certificationID)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.GET_CERTIFICATION,
        payload: data.certification,
      });
    })
    .catch((error) => {
      console.log("GetCertification " + error);
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const acceptCertification = (certificationID) => async (dispatch) => {
  CertificationAPI.acceptCertification(certificationID)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.ACCEPT_CERTIFICATION,
        payload: data.certification,
      });
    })
    .catch((error) => {
      console.log("AcceptCertification " + error);
      dispatch({
        type: CertificationActions.ACCEPT_CERTIFICATION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const rejectCertification = (certificationID) => async (dispatch) => {
  CertificationAPI.rejectCertification(certificationID)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.REJECT_CERTIFICATION,
        payload: data.certification,
      });
    })
    .catch((error) => {
      console.log("RejectCertification " + error);
      dispatch({
        type: CertificationActions.REJECT_CERTIFICATION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const reopenCertification = (certificationID) => async (dispatch) => {
  CertificationAPI.reopenCertification(certificationID)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.REOPEN_CERTIFICATION,
        payload: data.certification,
      });
    })
    .catch((error) => {
      console.log("ReopenCertification " + error);
      dispatch({
        type: CertificationActions.REOPEN_CERTIFICATION_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const sortCertification = (DATA) => async (dispatch) => {
  CertificationAPI.sortCertification(DATA)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST,
        payload: data.certificationList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const filterCertification = (DATA) => async (dispatch) => {
  CertificationAPI.filterCertification(DATA)
    .then(({ data }) => {
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST,
        payload: data.certificationList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CertificationActions.GET_CERTIFICATION_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
