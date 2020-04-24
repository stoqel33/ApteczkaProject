import axios from 'axios';
/* eslint-disable import/prefer-default-export */

export const fetchMedicines = () => (dispatch) => {
  dispatch({ type: 'FETCH_REQUEST' });
  return axios
    .get('http://localhost:3000/ApteczkaProject/')
    .then(({ data }) => {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'FETCH_FAILURE' });
    });
};
export const changeMedicine = (medicine, id) => (dispatch) => {
  dispatch({ type: 'CHANGE_MED_REQUEST' });
  return axios
    .post(`http://localhost:3000/ApteczkaProject/editMedicine/update/${id}`, {
      type: medicine,
    })
    .then(({ data }) => {
      dispatch({
        type: 'CHANGE_MED_SUCCESS',
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'FETCH_FAILURE' });
    });
};

export const addMedicine = (medicine) => (dispatch) => {
  dispatch({ type: 'ADD_MED_REQUEST' });
  return axios
    .post('http://localhost:3000/ApteczkaProject/addMedicine', {
      type: medicine,
    })
    .then(({ data }) => {
      dispatch({
        type: 'ADD_MED_SUCCESS',
        payload: {
          data,
        },
      });
    });
};

export const removeMedicine = (id) => (dispatch) => {
  dispatch({ type: 'REMOVE_MED_REQUEST' });
  axios.delete(`http://localhost:3000/ApteczkaProject/editMedicine/${id}`).then(() => {
    dispatch({
      type: 'REMOVE_MED_SUCCESS',
      payload: {
        id,
      },
    });
  });
};
