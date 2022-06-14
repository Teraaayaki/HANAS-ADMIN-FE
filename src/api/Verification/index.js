import API from '../Base';

const VerificationAPI = {
    getVerification: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-verifications',
    };

    return API.request(options);
  }
};

export default VerificationAPI;
