import { API_ERROR, GET_REPORTED_CONTENT_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    reportedcontent: [],
};

const ReportedContent = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPORTED_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                reportedcontent: action.payload,
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

export default ReportedContent;
