import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE } from "data/Actions/types";

const initialState = {
  profile: null,
  loading: false,
  exists: false,
};

function clearProfile(state) {
  return {
    ...state,
    profile: null,
  };
}

function getProfile(state, action) {
  return Object.assign({}, state, {
    profile: action.payload,
    loading: false,
    exists: true,
  });
}

function loading(state) {
  return {
    ...state,
    loading: true,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return loading(state);
    case GET_PROFILE:
      return getProfile(state, action);
    case CLEAR_PROFILE:
      return clearProfile(state);
    default:
      return state;
  }
}
