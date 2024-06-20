import { API_ERROR, GET_FINANACES_SUCCESS } from "./actionTypes";

const initialState = {
    error: null,
    loading: true,
    finances: [],
};

const Finances = (state = initialState, action) => {
    switch (action.type) {
        case GET_FINANACES_SUCCESS:
            return {
                ...state,
                loading: false,
                finances: action.payload,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default Finances;