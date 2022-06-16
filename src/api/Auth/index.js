<<<<<<< HEAD
import API from "../Base";
=======
import API from '../Base';
>>>>>>> d64fdc1c974c953e252fcac480ceab73ce6f230c

const AuthAPI = {
  login: ({ email, password }) => {
    const options = {
<<<<<<< HEAD
      method: "POST",
      url: "/auth/admin-login",
      data: {
        email: email,
        password: password,
      },
    };
    return API.request(options);
  },
=======
      method: 'POST',
      url: '/auth/admin-login',
      data: {
        email: email,
        password: password
      }
    };

    return API.request(options);
  }
>>>>>>> d64fdc1c974c953e252fcac480ceab73ce6f230c
};

export default AuthAPI;
