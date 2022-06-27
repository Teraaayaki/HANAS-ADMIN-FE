import { WorkerActions } from "./types";
import WorkerAPI from "../../api/Worker";

export const getWorkerList = () => (dispatch) => {
  WorkerAPI.getWorkerList()
    .then(({ data }) => {
      dispatch({ type: WorkerActions.GET_WORKER_LIST, payload: data.workers });
      console.log("GetWorkerList", data.workers);
    })
    .catch((error) => {
      console.log("GetWorkerList\n-" + error);
      dispatch({
        type: WorkerActions.GET_WORKER_LIST_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};

export const getWorker = (user_id) => (dispatch) => {
  WorkerAPI.getWorker({ user_id })
    .then(({ data }) => {
      dispatch({
        type: WorkerActions.GET_WORKER,
        payload: data,
      });
    })
    .catch((error) => {
      console.log("Error: getWorker\n-" + error);
      dispatch({
        type: WorkerActions.GET_WORKER_ERROR,
        payload: error?.response?.data?.error,
      });
    });
};
