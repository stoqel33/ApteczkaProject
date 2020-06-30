import { combineReducers } from 'redux';

import authReducer from 'data/Reducers/authReducer';
import errorReducer from 'data/Reducers/errorReducer';
import medicinesReducer from 'data/Reducers/medicinesReducer';
import profileReducer from 'data/Reducers/profileReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  medicines: medicinesReducer,
  profile: profileReducer,
});
