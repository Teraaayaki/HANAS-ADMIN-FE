import API from '../Base';

const achievementAPI = {
  getAllWorkers: () => {
    const options = {
      method: 'GET',
      url: '/admin/get-all-workers',
    };

    return API.request(options);
  },

};

export default achievementAPI;
