import API from '../Base';

const convFeeAPI = {
  getAllConvFeeTransaction: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-conv-fee-list',
    };

    return API.request(options);
  },

  setConvFeeToPaid: (DATA) => {
    const options = {
      method: 'PATCH',
      url: '/admin/set-to-paid',
      data: {
        DATA
      }
    };

    return API.request(options);
  },

  sortConvFee: (DATA) => {
    const options = {
      method: 'PATCH',
      url: '/admin/sort-convenience-fee',
      data: {
        choice: DATA,
      }
    };

    return API.request(options);
  },

  filterConvFee: (DATA) => {
    const options = {
      method: 'PATCH',
      url: '/admin/filter-convenience-fee',
      data: {
        choice: DATA,
      }
    };

    return API.request(options);
  },

};

export default convFeeAPI;
