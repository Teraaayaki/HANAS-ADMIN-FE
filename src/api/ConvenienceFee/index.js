import API from '../Base';

const convFeeAPI = {
  getAllConvFeeTransaction: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-conv-fee-list',
    };

    return API.request(options);
  },

};

export default convFeeAPI;
