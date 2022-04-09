import axios from 'axios';
import { API_CONFIG } from 'constants/api';

export const auth = {
  login: (payload) => axios({ ...API_CONFIG.auth.login, data: payload }),
};
