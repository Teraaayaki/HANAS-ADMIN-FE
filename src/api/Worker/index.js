import API from "../Base";

const WorkerAPI = {
  getWorkerList: () => {
    const options = {
      method: "GET",
      url: `/admin/get-worker-list`,
    };
    return API.request(options);
  },

  getWorker: (workerID) => {
    const options = {
      method: "GET",
      url: `/admin/get-worker/${workerID}`,
    };
    return API.request(options);
  },
};

export default WorkerAPI;
