import { API_ERROR, GET_REPORTED_USERS_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    reportedusers: [],
};

const ReportedUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPORTED_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                reportedusers: action.payload,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default ReportedUsers;
