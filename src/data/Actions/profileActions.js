import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_PROFILE,
  GET_ERRORS,
  URL,
} from 'data/Actions/types';

export const createProfile = (profilData, history) => (dispatch) => {
  return axios
    .post(`${URL}/profile/`, profilData)
    .then(() => {
      history.push(`/ApteczkaProject/`);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getProfile = (history) => (dispatch) => {
  dispatch(loadingProfile());
  axios
    .get(`${URL}/profile/`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      history.push(`/ApteczkaProject/`);
    })
    .catch(() =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      }),
    );
};

export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE,
  };
};

export const loadingProfile = () => {
  return {
    type: PROFILE_LOADING,
  };
};
