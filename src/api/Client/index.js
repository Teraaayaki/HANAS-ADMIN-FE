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
};

export default ClientAPI;
