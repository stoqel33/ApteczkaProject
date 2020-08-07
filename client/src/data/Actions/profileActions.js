import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_PROFILE,
  GET_ERRORS,
} from 'data/Actions/types';

export const createProfile = (profilData, history) => (dispatch) => {
  return axios
    .post(`/api/Apteczka/profile/`, profilData)
    .then(() => {
      history.push(`/Apteczka/`);
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
    .get(`/api/Apteczka/profile/`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      history.push(`/Apteczka/`);
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
