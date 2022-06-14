import API from "../Base";

const ClientAPI = {
  getClients: () => {
    const options = {
      method: "GET",
      url: `/auth/get-clients`,
    };
    return API.request(options);
  },

  getClient: ({ user_id }) => {
    const options = {
      method: "GET",
      url: `/auth/get-clients/${user_id}`,
      params: {
        id: user_id,
      },
    };
    return API.request(options);
  },
};

export default ClientAPI;
