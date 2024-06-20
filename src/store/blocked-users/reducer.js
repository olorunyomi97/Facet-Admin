import { API_ERROR, GET_BLOCKED_USERS_SUCCESS, UNBLOCK_USER, UNBLOCK_USER_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    blockedusers: [],
    modal_loading: false,
    notify_success: false,
};

const BlockedUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOCKED_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                blockedusers: action.payload,
            };
        case UNBLOCK_USER:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
            };
        case UNBLOCK_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
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

export default BlockedUsers;
