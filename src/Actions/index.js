import axios from 'axios';
/* eslint-disable import/prefer-default-export */

export const fetchMedicines = () => (dispatch) => {
  dispatch({ type: 'FETCH_REQUEST' });
  return axios
    .get('http://localhost:3000/ApteczkaProject/')
    .then(({ data }) => {
      console.log('data w leki', data);
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

// export const fetchOneMedicine = (id) => (dispatch) => {
//   dispatch({ type: 'FETCH_REQUEST' });
//   return axios
//     .get(`http://localhost:3000/ApteczkaProject/editMedicine/${id}`)
//     .then(({ data }) => {
//       console.log('data 1 lek', data);
//       dispatch({
//         type: 'FETCH_SUCCESS',
//         payload: {
//           data,
//         },
//       });
//     });
// };

export const changeMedicine = (medicine, id) => {};

export const addMedicine = (medicine) => {
  const getID = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_MED',
    payload: {
      item: {
        id: getID(),
        ...medicine,
      },
    },
  };
};

export const removeMedicine = (id) => {
  return {
    type: 'REMOVE_MED',
    payload: {
      id,
    },
  };
};
