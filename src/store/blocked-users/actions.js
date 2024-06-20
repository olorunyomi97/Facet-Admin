import {
    API_ERROR,
    GET_BLOCKED_USERS,
    GET_BLOCKED_USERS_SUCCESS,
    UNBLOCK_USER,
    UNBLOCK_USER_SUCCESS,
} from './actionTypes';

export const getAllBlockedusers = () => {
    return {
        type: GET_BLOCKED_USERS,
    };
};

export const getBlockedusersSuccess = blockedusers => {
    return {
        type: GET_BLOCKED_USERS_SUCCESS,
        payload: blockedusers,
    };
};

export const unblockUser = user_id => {
    console.log('im here');
    console.log(user_id);
    return {
        type: UNBLOCK_USER,
        payload: { user_id },
    };
};

export const unblockUserSuccess = response => {
    return {
        type: UNBLOCK_USER_SUCCESS,
        payload: response,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
