import API from "../Base";

const WorkerAPI = {
  getWorkerList: () => {
    const options = {
      method: "GET",
      url: `/admin/get-workers`,
    };
    return API.request(options);
  },

  getWorker: ({ user_id }) => {
    const options = {
      method: "GET",
      url: `/admin/get-worker/${user_id}`,
      params: {
        id: user_id,
      },
    };
    return API.request(options);
  },
};

export default WorkerAPI;
