import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'data/Utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, URL } from 'data/Actions/types';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  return axios
    .post('/api/Apteczka/user/register', userData)
    .then(() => {
      dispatch(clearErrors());
      history.go();
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login User, get Token
export const loginUser = (userData, history) => (dispatch) => {
  return axios
    .post(`/api/Apteczka/user/login`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(clearErrors());
      history.push('/Apteczka/profile/create/');
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// Logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
