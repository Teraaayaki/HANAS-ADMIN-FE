import { WorkerActions } from "../actions/types";

const INITIAL_STATE = {
  workerListData: [],
  workerData: [],
  error: null,
};

const workerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkerActions.GET_WORKER_LIST:
      return {
        workerListData: action.payload,
        error: null,
      };
    case WorkerActions.GET_WORKER_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case WorkerActions.GET_WORKER:
      return {
        workerData: action.payload,
        error: null,
      };
    case WorkerActions.GET_WORKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workerReducer;
