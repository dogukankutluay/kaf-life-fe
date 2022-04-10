import { LANGUAGE } from 'redux/types';

export const setLanguage = (payload) => {
  return {
    type: LANGUAGE,
    payload,
  };
};
