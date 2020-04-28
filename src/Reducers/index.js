/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const initialState = {
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        medicines: [...action.payload.data],
        isLoading: false,
      };
    case 'ADD_MED_SUCCESS':
      return {
        medicines: [...state.medicines, action.payload.data],
      };
    case 'CHANGE_MED_SUCCESS': {
      const newState = { ...state };
      newState.medicines.forEach((medicine) => {
        if (medicine._id === action.payload.id) {
          medicine.name = action.payload.data.name;
          medicine.amount = action.payload.data.amount;
          medicine.expiryDate = action.payload.data.expiryDate;
        }
      });
      return {
        medicines: newState.medicines,
      };
    }
    case 'REMOVE_MED_SUCCESS':
      return {
        medicines: [
          ...state.medicines.filter((medicine) => medicine._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
export default rootReducer;
