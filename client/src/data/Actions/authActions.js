import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "data/Utils/setAuthToken";

import { SET_CURRENT_USER } from "data/Actions/types";
import { getErrors, clearErrors } from "data/Actions/errorActions";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  return axios
    .post("/api/Apteczka/user/register", userData)
    .then(() => {
      dispatch(clearErrors());
      history.go();
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

// Login User, get Token
export const loginUser = (userData, history) => (dispatch) => {
  return axios
    .post(`/api/Apteczka/user/login`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(clearErrors());
      history.push("/Apteczka/profile/create/");
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
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
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
