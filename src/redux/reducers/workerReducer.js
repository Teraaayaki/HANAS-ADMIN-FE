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
        ...state,
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
        ...state,
        workerData: action.payload,
        error: null,
      };
    case WorkerActions.GET_WORKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case WorkerActions.ACTIVATE_WORKER:
      return {
        ...state,
        workerData: action.payload,
        error: null,
      };
    case WorkerActions.ACTIVATE_WORKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case WorkerActions.DEACTIVATE_WORKER:
      return {
        ...state,
        workerData: action.payload,
        error: null,
      };
    case WorkerActions.DEACTIVATE_WORKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workerReducer;
