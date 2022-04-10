import axios from 'axios';
import { API_CONFIG } from 'constants/api';

export const auth = {
  login: (payload) => axios({ ...API_CONFIG.auth.login, data: payload }),
  register: (payload) => axios({ ...API_CONFIG.auth.register, data: payload }),
  confirmRegister: ({ code, phone }) =>
    axios({
      ...API_CONFIG.auth.confirmRegister,
      params: { code, phone },
    }),
  forgotPassword: (payload) =>
    axios({ ...API_CONFIG.auth.forgotPassword, params: { ...payload } }),
  confirmForgotPassword: (payload) =>
    axios({ ...API_CONFIG.auth.confirmForgotPassword, params: { ...payload } }),
  changePassword: (payload) =>
    axios({ ...API_CONFIG.auth.changePassword, data: payload }),
};
