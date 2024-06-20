import { API_ERROR, GET_TRANSACTIONS_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    transactions: [],
};

const Transactions = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.payload,
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
};

export default Transactions;
