import {
    GET_CONTENT,
    GET_CONTENT_SUCCESS,
    DELETE_CONTENT,
    DELETE_CONTENT_SUCCESS,
    GET_CONTENT_DETAILS,
    GET_CONTENT_DETAILS_SUCCESS,
    API_ERROR,
} from './actionTypes';

export const getAllContents = () => {
    return {
        type: GET_CONTENT,
    };
};

export const getContentSuccess = contents => {
    return {
        type: GET_CONTENT_SUCCESS,
        payload: contents,
    };
};

export const deleteContent = content_id => {
    return {
        type: DELETE_CONTENT,
        payload: { content_id },
    };
};

export const deleteContentSuccess = contents => {
    return {
        type: DELETE_CONTENT_SUCCESS,
        payload: contents,
    };
};

export const getContentDetails = content_id => {
    return {
        type: GET_CONTENT_DETAILS,
        payload: content_id,
    };
};

export const getContentDetailsSuccess = response => {
    return {
        type: GET_CONTENT_DETAILS_SUCCESS,
        payload: response,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
