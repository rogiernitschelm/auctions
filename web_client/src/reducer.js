import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { guestReducer } from './namespaces/guest';

export default combineReducers({
  guest: guestReducer,
  routing: routerReducer,
  form: formReducer
});
