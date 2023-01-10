import types from "../types/localStorage.types";
const initState = {
  currencies: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        currencies: action.payload,
      };
    case types.SET_DATA:
      return {
        ...state,
        currencies: [...state.currencies, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
