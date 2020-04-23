const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        medicines: [...action.payload.data],
      };
    case 'ADD_MED':
      return {
        medicines: [...state.medicines, action.payload.item],
      };
    case 'REMOVE_MED':
      return {
        medicines: [
          ...state.medicines.filter((medicine) => medicine.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
// console.log(initialState);

export default rootReducer;
