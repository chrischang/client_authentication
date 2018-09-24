import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as formReducer } from 'redux-form';
import nav from './nav';

export default combineReducers({
  auth,
  form: formReducer,
  nav
});
