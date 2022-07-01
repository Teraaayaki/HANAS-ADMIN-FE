import API from '../Base';

const transactionAPI = {
  getAllTransactions: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-transactions',
    };

    return API.request(options);
  }
};

export default transactionAPI;
