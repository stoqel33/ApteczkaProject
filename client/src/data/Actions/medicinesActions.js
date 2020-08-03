import axios from 'axios';

import {
  MEDICINES_LOADING,
  MEDICINES_GET,
  MEDICINES_ADD,
  MEDICINES_CHANGE,
  MEDICINES_REMOVE,
  MEDICINE_DECREASE,
  GET_ERRORS,
  CLEAR_ERRORS,
  URL,
} from 'data/Actions/types';

export const getMedicines = () => (dispatch) => {
  dispatch(setMedicinesLoading());
  axios
    .get(`${URL}/Apteczka/`)
    .then((res) => {
      dispatch({
        type: MEDICINES_GET,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: MEDICINES_GET,
        payload: null,
      });
    });
};

export const addMedicines = (medicine) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`${URL}/Apteczka/addMedicine`, medicine)
    .then((res) => {
      dispatch({
        type: MEDICINES_ADD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const changeMedicine = (medicine, id) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`${URL}/Apteczka/editMedicine/update/${id}`, medicine)
    .then((res) => {
      dispatch({
        type: MEDICINES_CHANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const removeMedicine = (id) => (dispatch) => {
  axios
    .delete(`${URL}/Apteczka/editMedicine/${id}`)
    .then(() => {
      dispatch({
        type: MEDICINES_REMOVE,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const decreaseMedicine = (id) => (dispatch) => {
  dispatch(setMedicinesLoading());
  axios
    .put(`${URL}/Apteczka/takePill/${id}`)
    .then(() => {
      dispatch({
        type: MEDICINE_DECREASE,
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set loading state
export const setMedicinesLoading = () => {
  return {
    type: MEDICINES_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
