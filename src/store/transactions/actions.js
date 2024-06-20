import { GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, API_ERROR } from './actionTypes';

export const getAllTransactions = () => {
    return {
        type: GET_TRANSACTIONS,
    };
};

export const getTransactionsSuccess = transactions => {
    return {
        type: GET_TRANSACTIONS_SUCCESS,
        payload: transactions,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
