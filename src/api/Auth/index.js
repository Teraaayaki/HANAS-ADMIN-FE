import API from "../Base";

const AuthAPI = {
  login: ({ email, password }) => {
    const options = {
      method: "POST",
      url: "/auth/admin-login",
      data: {
        email: email,
        password: password,
      },
    };

    return API.request(options);
  },

  forgotPass: (password) => {
    const options = {
      method: "POST",
      url: "/auth/admin-forgot-pass",
      data: {
        password,
      },
    };

    return API.request(options);
  },
};

export default AuthAPI;
