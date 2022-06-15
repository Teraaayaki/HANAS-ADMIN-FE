import API from '../Base';

export const VerificationAPI = {
    getVerification: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-verifications',
    };

    return API.request(options);
  }
};


export const GetSpecificVerificationAPI = {
  getSpecificVerification: ({ id }) => {
    const options = {
      method: 'GET',
      url: '/admin/get-verification/:id',
      data: {
        _id: id
      }
    };

    return API.request(options);
  }
}
