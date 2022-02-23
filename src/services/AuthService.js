import Cookies from 'js-cookie';

const authenticated = () => {
  return Cookies.get('access_token') ? true : false;
};

const AuthService = {
  authenticated
};

export default AuthService;
