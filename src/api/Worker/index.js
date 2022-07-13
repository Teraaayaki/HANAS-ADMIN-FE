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

  activateWorker: (workerID) => {
    const options = {
      method: "GET",
      url: `/admin/activate-worker/${workerID}`,
    };
    return API.request(options);
  },

  deactivateWorker: (workerID) => {
    const options = {
      method: "GET",
      url: `/admin/deactivate-worker/${workerID}`,
    };
    return API.request(options);
  },
  sortWorker: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/sort-worker`,
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },

  filterWorker: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/filter-worker`,
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },
};

export default WorkerAPI;
