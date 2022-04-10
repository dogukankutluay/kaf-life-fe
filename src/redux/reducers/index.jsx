import { combineReducers } from 'redux';
import authReducer from './authReducer';
import preferencesReducer from './preferencesReducer';

export default combineReducers({
  authReducer,
  preferencesReducer,
});
