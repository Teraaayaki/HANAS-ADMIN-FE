import API from '../Base';

export const VerificationAPI = {

  getVerification: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-verifications',
    };

    return API.request(options);
  },

  getSpecificVerification: (id) => {
    const options = {
      method: 'GET',
      url: `/admin/get-verification/${id}`,
    };

    return API.request(options);
  },

  acceptVerification: (id) => {
    const options = {
      method: 'POST',
      url: `/admin/accept-verification/${id}`,
    };

    return API.request(options);
  },

  rejectVerification: (id) => {
    const options = {
      method: 'POST',
      url: `/admin/reject-verification/${id}`,
    }

    return API.request(options);
  },

  removeVerification: (id) => {
    const options = {
      method: 'POST',
      url: `/admin/remove-verification/${id}`,
    }

    return API.request(options);
  },

  sortVerification: (DATA) => {
    const options = {
      method: 'PATCH',
      url: `/admin/sort-verification`,
      data: {
        choice: DATA,
      }
    };

    return API.request(options);
  },

  filterVerification: (DATA) => {
    const options = {
      method: 'PATCH',
      url: `/admin/filter-verification`,
      data: {
        choice: DATA,
      }
    };

    return API.request(options);
  }

};

export default VerificationAPI;

