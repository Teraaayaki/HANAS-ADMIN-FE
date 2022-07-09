import API from "../Base";

const ClientAPI = {
  getClientList: () => {
    const options = {
      method: "GET",
      url: `/admin/get-client-list`,
    };
    return API.request(options);
  },

  getClient: (clientID) => {
    const options = {
      method: "GET",
      url: `/admin/get-client/${clientID}`,
    };
    return API.request(options);
  },

  sortClient: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/sort-client`,
      data: {
        choice: DATA
      }
    };

    return API.request(options);
  },

  filterClient: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/filter-client`,
      data: {
        choice: DATA
      }
    };

    return API.request(options);
  }
};

export default ClientAPI;
