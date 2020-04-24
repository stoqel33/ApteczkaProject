const initialState = {
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
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
        isLoading: false,
      };
    case 'REMOVE_MED_SUCCESS':
      return {
        medicines: [
          ...state.medicines.filter((medicine) => medicine.id !== action.payload.id),
        ],
        isLoading: false,
      };
    default:
      return state;
  }
};
export default rootReducer;
