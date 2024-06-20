import {
    API_ERROR,
    GET_FAN_SUCCESS,
    UPGRADE_FAN,
    BLOCK_FAN,
    BLOCK_FAN_SUCCESS,
    UPGRADE_FAN_SUCCESS,
    GET_FAN_DETAIL_SUCCESS,
} from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    fans: [],
    fan: {},
    modal_loading: false,
    notify_success: false,
};

const Fans = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAN_SUCCESS:
            return {
                ...state,
                loading: false,
                fans: action.payload,
            };
        case UPGRADE_FAN:
            return {
                ...state,
                loading: false,
            };
        case UPGRADE_FAN_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case BLOCK_FAN:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case BLOCK_FAN_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
                // fan: action.payload,
            };
        case GET_FAN_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                fan: action.payload,
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

export default Fans;
