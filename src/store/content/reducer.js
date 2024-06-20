import { API_ERROR, DELETE_CONTENT, GET_CONTENT_SUCCESS, GET_CONTENT_DETAILS_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    contents: [],
    content: {},
    modal_loading: false,
    notify_success: false,
};

const Contents = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                contents: action.payload,
            };
        case DELETE_CONTENT:
            return {
                ...state,
                loading: false,
            };
        case GET_CONTENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload,
                modal_loading: false,
                notify_success: true,
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

export default Contents;
