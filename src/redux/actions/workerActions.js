import { WorkerActions } from "./types";
import WorkerAPI from "../../api/Worker";

export const getWorkerList = () => (dispatch) => {
  WorkerAPI.getWorkerList()
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.GET_WORKER_LIST,
        payload: data.workerList,
      });
    })
    .catch((error) => {
      console.log("GetWorkerList " + error);
      dispatch({
        type: WorkerActions.GET_WORKER_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getWorker = (workerID) => (dispatch) => {
  WorkerAPI.getWorker(workerID)
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.GET_WORKER,
        payload: data.worker,
      });
    })
    .catch((error) => {
      console.log("getWorker " + error);
      dispatch({
        type: WorkerActions.GET_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const activateWorker = (workerID) => async (dispatch) => {
  WorkerAPI.activateWorker(workerID)
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.ACTIVATE_WORKER,
      });
    })
    .catch((error) => {
      console.log("ActivateWorker " + error);
      dispatch({
        type: WorkerActions.ACTIVATE_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const deactivateWorker = (workerID) => async (dispatch) => {
  WorkerAPI.deactivateWorker(workerID)
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.DEACTIVATE_WORKER,
      });
    })
    .catch((error) => {
      console.log("DeactivateWorker " + error);
      dispatch({
        type: WorkerActions.DEACTIVATE_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const sortWorker = (DATA) => (dispatch) => {
  WorkerAPI.sortWorker(DATA)
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.GET_WORKER_LIST,
        payload: data.workerList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: WorkerActions.GET_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const filterWorker = (DATA) => (dispatch) => {
  WorkerAPI.filterWorker(DATA)
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.GET_WORKER_LIST,
        payload: data.workerList,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: WorkerActions.GET_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
