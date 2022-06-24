import API from '../Base';

const OverviewAPI = {
  totalUsers: () => {
    const options = {
      method: 'GET',
      url: '/admin/count-users',
    };

    return API.request(options);
  },

  pendingVerifications: () => {
    const options = {
      method: 'GET',
      url: 'admin/count-verifications',
    };

    return API.request(options);
  },

  pendingReports: () => {
    const options = {
      method: 'GET',
      url: 'admin/count-reports',
    };

    return API.request(options);
  },

  income: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-income',
    };

    return API.request(options);
  },

  verified: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-verified',
    }

    return API.request(options);
  },

  userType: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-type-of-users',
    }

    return API.request(options);
  },
  
};

export default OverviewAPI;
