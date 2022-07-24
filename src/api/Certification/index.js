import API from "../Base";

const CertificationAPI = {
  getCertificationList: () => {
    const options = {
      method: "GET",
      url: `/admin/get-certification-list`,
    };
    return API.request(options);
  },

  getCertification: (certificationID) => {
    const options = {
      method: "GET",
      url: `/admin/get-certification/${certificationID}`,
    };
    return API.request(options);
  },

  acceptCertification: (certificationID) => {
    const options = {
      method: "GET",
      url: `/admin/accept-certification/${certificationID}`,
    };
    return API.request(options);
  },

  rejectCertification: (certificationID) => {
    const options = {
      method: "GET",
      url: `/admin/reject-certification/${certificationID}`,
    };
    return API.request(options);
  },

  setPendingCertification: (certificationID) => {
    const options = {
      method: "GET",
      url: `/admin/set-pending-certification/${certificationID}`,
    };
    return API.request(options);
  },

  sortCertification: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/sort-certification`,
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },

  filterClient: (DATA) => {
    const options = {
      method: "PATCH",
      url: `/admin/filter-certification`,
      data: {
        choice: DATA,
      },
    };

    return API.request(options);
  },
};

export default CertificationAPI;
