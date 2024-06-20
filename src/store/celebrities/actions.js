import {
    GET_CELEBRITY,
    GET_CELEBRITY_SUCCESS,
    GET_SINGLE_CELEBRITY,
    GET_SINGLE_CELEBRITY_SUCCESS,
    CREATE_CELEBRITY,
    CREATE_CELEBRITY_SUCCESS,
    BLOCK_CELEBRITY,
    BLOCK_CELEBRITY_SUCCESS,
    API_ERROR,
} from './actionTypes';

export const getAllCelebrities = () => {
    return {
        type: GET_CELEBRITY,
    };
};

export const getCelebritiesSuccess = celebrities => {
    return {
        type: GET_CELEBRITY_SUCCESS,
        payload: celebrities,
    };
};

export const getSingleCelebrity = celebrity_id => {
    return {
        type: GET_SINGLE_CELEBRITY,
        payload: celebrity_id,
    };
};

export const getSingleCelebritySuccess = response => {
    return {
        type: GET_SINGLE_CELEBRITY_SUCCESS,
        payload: response,
    };
};

export const createCelebrity = celebData => {
    return {
        type: CREATE_CELEBRITY,
        payload: { celebData },
    };
};

export const createCelebritySuccess = celeb => {
    return {
        type: CREATE_CELEBRITY_SUCCESS,
        payload: celeb,
    };
};

export const blockCelebrity = celebData => {
    return {
        type: BLOCK_CELEBRITY,
        payload: { celebData },
    };
};

export const blockCelebritySuccess = response => {
    return {
        type: BLOCK_CELEBRITY_SUCCESS,
        payload: { response },
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
