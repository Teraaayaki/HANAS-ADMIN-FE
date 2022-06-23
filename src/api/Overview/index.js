import API from '../Base';

const OverviewAPI = {
  income: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-income',
      
    };

    return API.request(options);
  },
  
};

export default OverviewAPI;
