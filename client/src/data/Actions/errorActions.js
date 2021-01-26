import { GET_ERRORS, CLEAR_ERRORS } from "data/Actions/types";

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const getErrors = (data) => {
  return {
    type: GET_ERRORS,
    payload: data,
  };
};
