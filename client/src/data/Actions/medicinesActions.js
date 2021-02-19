import axios from "axios";

import {
  MEDICINES_LOADING,
  MEDICINES_GET,
  MEDICINES_ADD,
  MEDICINES_CHANGE,
  MEDICINES_REMOVE,
  MEDICINE_DECREASE,
} from "data/Actions/types";
import { getErrors, clearErrors } from "data/Actions/errorActions";

export const getMedicines = () => (dispatch) => {
  dispatch(setMedicinesLoading());
  axios
    .get(`/api/Apteczka/`)
    .then((res) => {
      dispatch({
        type: MEDICINES_GET,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const addMedicines = (medicine) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`/api/Apteczka/addMedicine`, medicine)
    .then((res) => {
      dispatch({
        type: MEDICINES_ADD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const changeMedicine = (medicine, id) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`/api/Apteczka/editMedicine/update/${id}`, medicine)
    .then((res) => {
      dispatch({
        type: MEDICINES_CHANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const removeMedicine = (id) => (dispatch) => {
  axios
    .delete(`/api/Apteczka/editMedicine/${id}`)
    .then(() => {
      dispatch({
        type: MEDICINES_REMOVE,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

export const decreaseMedicine = (id) => (dispatch) => {
  axios
    .put(`/api/Apteczka/takePill/${id}`)
    .then(() => {
      dispatch({
        type: MEDICINE_DECREASE,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
    });
};

// Set loading state
export const setMedicinesLoading = () => (dispatch) => {
  dispatch({
    type: MEDICINES_LOADING,
  });
};
