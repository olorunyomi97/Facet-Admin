import { GET_SUBSCRIPTION_GIFTS, GET_SUBSCRIPTION_GIFTS_SUCCESS, API_ERROR } from './actionTypes';

export const getAllSubscriptionGifts = () => {
    return {
        type: GET_SUBSCRIPTION_GIFTS,
    };
};

export const getSubscriptionGiftsSuccess = gift => {
    return {
        type: GET_SUBSCRIPTION_GIFTS_SUCCESS,
        payload: gift,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
