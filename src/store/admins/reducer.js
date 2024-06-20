import { API_ERROR, CREATE_ADMIN, CREATE_ADMIN_SUCCESS, DELETE_ADMIN, GET_ADMIN_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    admins: [],
    modal_loading: false,
    notify_success: false,
};

const Admins = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                admins: action.payload,
            };
        case CREATE_ADMIN:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case CREATE_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
            };
        case DELETE_ADMIN:
            return {
                ...state,
                loading: false,
            };

        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                modal_loading: false,
            };

        default:
            return state;
    }
};

export default Admins;
