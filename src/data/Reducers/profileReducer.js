import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE } from 'data/Actions/types';

const initialState = {
  profile: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}
