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

};

export default convFeeAPI;
