import {
  MEDICINES_LOADING,
  MEDICINES_GET,
  MEDICINES_ADD,
  MEDICINES_CHANGE,
  MEDICINES_REMOVE,
  MEDICINE_DECREASE,
} from 'data/Actions/types';

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItem = array.map((item) => {
    if (item._id !== itemId) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItem;
}

function removeMedicine(state, action) {
  const newMedicines = state.medicines.filter(
    (medicine) => medicine._id !== action.payload,
  );
  return {
    medicines: newMedicines,
  };
}

function decreaseMedicine(state, action) {
  const newMedicine = updateItemInArray(state.medicines, action.payload, (medicine) => {
    return updateObject(medicine, {
      amount: medicine.amount - 1,
    });
  });
  return updateObject(state, { medicines: newMedicine, loading: false });
}

function changeMedicine(state, action) {
  const newMedicine = updateItemInArray(
    state.medicines,
    action.payload.medicine._id,
    (medicine) => {
      return updateObject(medicine, {
        name: action.payload.medicine.name,
        amount: action.payload.medicine.amount,
        expiryDate: action.payload.medicine.expiryDate,
        copy: action.payload.medicine.copy,
      });
    },
  );
  return updateObject(state, { medicines: newMedicine });
}

function addMedicine(state, action) {
  const newMedicine = state.medicines.concat({
    _id: action.payload._id,
    name: action.payload.name,
    amount: action.payload.amount,
    expiryDate: action.payload.expiryDate,
    copy: action.payload.copy,
  });

  return updateObject(state, { medicines: newMedicine });
}

function getMedicines(state, action) {
  return updateObject(state, {
    medicines: action.payload,
    loading: false,
    refresh: false,
  });
}

function loading(state) {
  return {
    ...state,
    loading: false,
    refresh: false,
  };
}

const initialState = {
  medicines: [],
  loading: false,
  refresh: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case MEDICINES_LOADING:
      return loading(state);

    case MEDICINES_GET:
      return getMedicines(state, action);

    case MEDICINES_ADD:
      return addMedicine(state, action);

    case MEDICINES_CHANGE:
      return changeMedicine(state, action);

    case MEDICINE_DECREASE:
      return decreaseMedicine(state, action);

    case MEDICINES_REMOVE:
      return removeMedicine(state, action);

    default:
      return state;
  }
}

export default appReducer;
