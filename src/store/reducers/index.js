import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// Reducer imports
import authReducer from '../reducers/authReducer';

// Root reducer
export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
});
