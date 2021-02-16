import { GET_ERRORS, CLEAR_ERRORS } from "data/Actions/types";
import { SET_CURRENT_USER } from "data/Actions/types";
import setAuthToken from "data/Utils/setAuthToken";

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const getErrors = (data) => {
  if (data === "Unauthorized") {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    return {
      type: SET_CURRENT_USER,
      payload: {},
    };
  }
  return {
    type: GET_ERRORS,
    payload: data,
  };
};
