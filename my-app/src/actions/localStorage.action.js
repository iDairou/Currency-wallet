import types from "../types/localStorage.types";

export const getDataAction = (data) => {
  return {
    type: types.GET_DATA,
    payload: { data },
  };
};
export const setDataAction = (data) => {
  return {
    type: types.SET_DATA,
    payload: { data },
  };
};
