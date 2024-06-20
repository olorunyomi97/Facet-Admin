import {
    GET_FAN,
    GET_FAN_SUCCESS,
    UPGRADE_FAN,
    UPGRADE_FAN_SUCCESS,
    BLOCK_FAN,
    BLOCK_FAN_SUCCESS,
    API_ERROR,
    GET_FAN_DETAILS,
    GET_FAN_DETAIL_SUCCESS,
} from './actionTypes';

export const getAllFans = () => ({
    type: GET_FAN,
});

export const getFansSuccess = fans => ({
    type: GET_FAN_SUCCESS,
    payload: fans,
});

export const getFanDetails = fan_id => ({
    type: GET_FAN_DETAILS,
    payload: fan_id,
});

export const getFanDetailsSuccess = response => ({
    type: GET_FAN_DETAIL_SUCCESS,
    payload: response,
});

export const upgradeFan = fanData => {
    return {
        type: UPGRADE_FAN,
        payload: { fanData },
    };
};

export const upgradeFanSuccess = fan => {
    return {
        type: UPGRADE_FAN_SUCCESS,
        payload: fan,
    };
};

export const blockFan = fanData => {
    return {
        type: BLOCK_FAN,
        payload: { fanData },
    };
};

export const blockFanSuccess = response => {
    return {
        type: BLOCK_FAN_SUCCESS,
        payload: { response },
    };
};
export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
