import API from "../Base";

const achievementAPI = {
  getAllWorkers: () => {
    const options = {
      method: "GET",
      url: "/admin/get-all-workers",
    };

    return API.request(options);
  },

  addToAchievement: (DATA) => {
    const options = {
      method: "PATCH",
      url: "/admin/add-to-achievement",
      data: {
        item: DATA.itemClaimed,
        _id: DATA.id,
      },
    };

    return API.request(options);
  },

  achievementCheck: (DATA) => {
    const options = {
      method: "GET",
      url: `/admin/achievement-check/${DATA.id}`,
    };

    return API.request(options);
  },
};

export default achievementAPI;
