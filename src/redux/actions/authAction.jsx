import { REDIRECT, REGISTER } from 'redux/types';

export const redirectAction = (payload) => {
  return {
    type: REDIRECT,
    payload,
  };
};
export const registerAction = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};
