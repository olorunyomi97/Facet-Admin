import { GET_FINANCES, GET_FINANACES_SUCCESS, API_ERROR } from './actionTypes'

export const getAllFinances = () => {
    return {
        type: GET_FINANCES,
    };
};

export const getFinancesSuccess = finances => {
    return {
        type: GET_FINANACES_SUCCESS,
        payload: finances,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
