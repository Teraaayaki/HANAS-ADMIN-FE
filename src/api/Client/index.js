import API from "../Base";

const ClientAPI = {
  getClients: () => {
    const options = {
      method: "GET",
      url: `/admin/get-clients`,
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
