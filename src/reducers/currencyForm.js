

export const ADD_ITEM = "ADD";

const initialState = {
	currencies: [],
};

export const createActionAdd = (currencyData) => ({
	type: ADD_ITEM,
	payload: currencyData,
});



export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				currencies: [...state.currencies, action.payload],
			};
		default:
			return state;
	}
};
export default reducer;
