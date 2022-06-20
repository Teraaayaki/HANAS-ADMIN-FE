import API from "../Base";

const ClientAPI = {
  getClients: () => {
    const options = {
      method: "GET",
      url: `/admin/get-clients`,
    };
    return API.request(options);
  },

  getClient: ({ user_id }) => {
    const options = {
      method: "GET",
      url: `/admin/get-client/${user_id}`,
      params: {
        id: user_id,
      },
    };
    return API.request(options);
  },
};

export default ClientAPI;
