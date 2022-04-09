export const BASE_URL = 'http://3.145.30.11/api/v1/';
const METHODS = {
  GET: 'GET',
  POST: 'POST',
  CREATE: 'CREATE',
};
export const API_CONFIG = {
  auth: {
    login: { url: `${BASE_URL}auth/login`, method: METHODS.POST },
    register: { url: `${BASE_URL}auth/register`, method: METHODS.POST },
    confirmRegister: {
      url: `${BASE_URL}auth/confirmRegister`,
      method: METHODS.POST,
    },
    forgotPassword: {
      url: `${BASE_URL}auth/forgotPassword`,
      method: METHODS.POST,
    },
    confirmForgotPassword: {
      url: `${BASE_URL}auth/confirmForgotPassword`,
      method: METHODS.POST,
    },
    changePassword: {
      url: `${BASE_URL}auth/changePassword`,
      method: METHODS.POST,
    },
  },
  admin: {
    getUsers: { url: 'admin/getUsers', method: METHODS.POST },
    userStatusAction: { url: 'admin/userStatusAction', method: METHODS.POST },
  },
};
