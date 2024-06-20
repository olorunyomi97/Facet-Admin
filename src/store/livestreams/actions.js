import { API_ERROR, GET_LIVESTREAMS, GET_LIVESTREAMS_SUCCESS } from './actionsTypes';

export const getAllLivestreams = () => {
    return {
        type: GET_LIVESTREAMS,
    };
};

export const getLivestreamsSuccess = livestreams => {
    return {
        type: GET_LIVESTREAMS_SUCCESS,
        payload: livestreams,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
