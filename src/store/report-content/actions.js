import { GET_REPORTED_CONTENT, GET_REPORTED_CONTENT_SUCCESS, API_ERROR } from './actionTypes';

export const getAllReportedcontent = () => {
    return {
        type: GET_REPORTED_CONTENT,
    };
};

export const getReportedcontentSuccess = reportedcontent => {
    return {
        type: GET_REPORTED_CONTENT_SUCCESS,
        payload: reportedcontent,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
