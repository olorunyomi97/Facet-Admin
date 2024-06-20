import { SET_SUBSCRIPTION, SET_SUBSCRIPTION_SUCCESS, API_ERROR } from './actionTypes';

export const setSubscription = subscription_price => {
    return {
        type: SET_SUBSCRIPTION,
        payload: { subscription_price },
    };
};

export const setSubscriptionSuccess = response => {
    return {
        type: SET_SUBSCRIPTION_SUCCESS,
        payload: response,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
