import { LANGUAGE } from 'redux/types';
const INITIAL_STATE = {
  language: 'tr',
};

const preferencesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
export default preferencesReducer;
