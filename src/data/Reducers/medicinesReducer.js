import {
  MEDICINES_LOADING,
  MEDICINES_GET,
  MEDICINES_ADD,
  MEDICINES_CHANGE,
  MEDICINES_REMOVE,
  MEDICINE_DECREASE,
} from 'data/Actions/types';

const initialState = {
  medicines: [],
  loading: false,
  refresh: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MEDICINES_LOADING:
      return {
        ...state,
        loading: true,
        refresh: false,
      };

    case MEDICINES_GET:
      return {
        medicines: action.payload,
        loading: false,
        refresh: false,
      };

    case MEDICINES_ADD:
      return {
        medicines: [...state.medicines, action.payload],
        loading: false,
      };

    case MEDICINES_CHANGE:
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
        loading: false,
      };

    case MEDICINES_REMOVE:
      return {
        medicines: [
          ...state.medicines.filter((medicine) => medicine._id !== action.payload.id),
        ],
        loading: false,
      };

    case MEDICINE_DECREASE:
      const decreaseMedicine = state.medicines;
      decreaseMedicine
        .filter((medicine) => medicine._id === action.payload)
        .map((medicine) => medicine.amount - 1);
      return {
        ...state,
        medicines: decreaseMedicine,
        loading: false,
        refresh: true,
      };

    default:
      return state;
  }
}
