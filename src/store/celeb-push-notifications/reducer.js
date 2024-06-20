import { SEND_PUSH_NOTIFICATIONS, SEND_PUSH_NOTIFICATIONS_SUCCESS, SINGLE_NOTIFICATION, SINGLE_NOTIFICATION_SUCCESS, API_ERROR }  from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    celebrities: [],
    celebrity: {},
    modal_loading: false,
    notify_success: false,
}

const CelebPushNotifications = (state = initialState, action) => {
    switch (action.type) {
        case SEND_PUSH_NOTIFICATIONS:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            }
        case SEND_PUSH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
                // fan: action.payload,
            };
        case SINGLE_NOTIFICATION:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case SINGLE_NOTIFICATION_SUCCESS:
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
}

export default CelebPushNotifications;