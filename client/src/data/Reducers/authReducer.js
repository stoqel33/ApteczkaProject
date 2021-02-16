/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import isEmpty from "data/Validation/isEmpty";
import { SET_CURRENT_USER } from "data/Actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

function setCurrentUser(state, action) {
  return Object.assign({}, state, {
    isAuthenticated: !isEmpty(action.payload),
    user: action.payload,
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return setCurrentUser(state, action);
    default:
      return state;
  }
}
