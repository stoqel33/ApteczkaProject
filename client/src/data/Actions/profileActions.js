import axios from "axios";

import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE } from "data/Actions/types";
import { getErrors, clearErrors } from "data/Actions/errorActions";

export const createProfile = (profilData, history) => (dispatch) => {
  return axios
    .post(`/api/Apteczka/profile/`, profilData)
    .then(() => {
      dispatch(getProfile(history));
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const getProfile = (history) => (dispatch) => {
  dispatch(loadingProfile());
  axios
    .get(`/api/Apteczka/profile/`)
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      history.push(`/Apteczka/`);
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const clearProfile = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
};

export const loadingProfile = () => (dispatch) => {
  dispatch({
    type: PROFILE_LOADING,
  });
};
