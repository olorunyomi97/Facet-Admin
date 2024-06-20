import { GET_REPORTED_USERS, GET_REPORTED_USERS_SUCCESS, API_ERROR} from './actionTypes';

export const getAllReportedusers = () => {
    return {
        type: GET_REPORTED_USERS,
    };
};

export const getReportedusersSuccess = reportedusers => {
    return {
        type: GET_REPORTED_USERS_SUCCESS,
        payload: reportedusers,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
