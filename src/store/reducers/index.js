import { combineReducers } from 'redux';

// Reducer imports
import authReducer from '../reducers/authReducer';

// Root reducer
export default combineReducers({
  auth: authReducer
});
