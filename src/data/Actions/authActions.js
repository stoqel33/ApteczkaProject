import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'data/Utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER, URL } from 'data/Actions/types';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  return axios
    .post(`${URL}/user/register`, userData)
    .then(() => history.push('/ApteczkaProject/user/signin'))
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
    .post(`${URL}/user/login`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push('/ApteczkaProject/profile/create');
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

// Logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
