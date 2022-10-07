import API from "../Base";

const transactionAPI = {
  getAllTransactions: () => {
    const options = {
      method: "GET",
      url: "/admin/get-transactions",
    };

    return API.request(options);
  },

  sortTransaction: (DATA) => {
    const options = {
      method: "PATCH",
      url: "/admin/sort-transaction",
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },

  filterTransaction: (DATA) => {
    const options = {
      method: "PATCH",
      url: "/admin/filter-transaction",
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },
};

export default transactionAPI;
