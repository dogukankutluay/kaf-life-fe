import { REDIRECT, REGISTER } from 'redux/types';
const INITIAL_STATE = {
  redirect: '',
  user: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, redirect: action.payload };
    case REGISTER:
      return {
        ...state,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
