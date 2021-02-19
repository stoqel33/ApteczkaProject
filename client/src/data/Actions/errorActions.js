import { GET_ERRORS, CLEAR_ERRORS } from "data/Actions/types";
import { SET_CURRENT_USER } from "data/Actions/types";
import setAuthToken from "data/Utils/setAuthToken";

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const getErrors = (data) => (dispatch) => {
  if (data === "Unauthorized") {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch({
      type: SET_CURRENT_USER,
      payload: {},
    });
  }
  dispatch({
    type: GET_ERRORS,
    payload: data,
  });
};
