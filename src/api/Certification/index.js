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

  reopenCertification: (certificationID) => {
    const options = {
      method: "GET",
      url: `/admin/reopen-certification/${certificationID}`,
    };
    return API.request(options);
  },

  sortCertification: (DATA) => {
    const options = {
      method: "GET",
      url: `/admin/get-certification-list/${DATA}`,
    };

    return API.request(options);
  },

  filterClient: (DATA) => {
    const options = {
      method: "GET",
      url: `/admin/filter-certification/${DATA}`,
    };

    return API.request(options);
  },
};

export default CertificationAPI;
