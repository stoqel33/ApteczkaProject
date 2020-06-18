/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const initialState = {
  refresh: false,
  isLoading: false,
  response: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        isLoading: true,
        response: true,
        refresh: false,
      };
    case 'FETCH_SUCCESS':
      return {
        medicines: [...action.payload.data],
        isLoading: false,
        response: true,
        refresh: false,
      };
    case 'ADD_MED_SUCCESS':
      return {
        medicines: [...state.medicines, action.payload.data],
        response: true,
        refresh: false,
      };
    case 'CHANGE_MED_SUCCESS': {
      const { medicines } = state;
      medicines.forEach((medicine) => {
        if (medicine._id === action.payload.id) {
          medicine.name = action.payload.data.name;
          medicine.amount = action.payload.data.amount;
          medicine.expiryDate = action.payload.data.expiryDate;
        }
      });
      return {
        medicines,
        response: true,
        refresh: false,
      };
    }
    case 'REMOVE_MED_SUCCESS':
      return {
        medicines: [
          ...state.medicines.filter((medicine) => medicine._id !== action.payload.id),
        ],
        response: true,
        refresh: false,
      };
    case 'REMOVE_ONE_MED_SUCCESS':
      const { medicines } = state;
      medicines.forEach((medicine) => {
        if (medicine._id === action.payload.id) {
          medicine.name = action.payload.data.name;
          medicine.amount = action.payload.data.amount;
          medicine.expiryDate = action.payload.data.expiryDate;
        }
      });
      return {
        refresh: true,
        isLoading: false,
        response: true,
        medicines,
      };

    case 'FETCH_FAILURE': {
      return {
        response: false,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
