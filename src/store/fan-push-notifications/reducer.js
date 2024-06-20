import { FAN_PUSH_NOTIFICATIONS, FAN_PUSH_NOTIFICATIONS_SUCCESS, SINGLE_FAN_NOTIFICATION, SINGLE_FAN_NOTIFICATION_SUCCESS, API_ERROR } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    fans: [],
    fan: {},
    modal_loading: false,
    notify_success: false,
}

const FanPushNotification = (state = initialState, action) => {
    switch (action.type) {
        case FAN_PUSH_NOTIFICATIONS:
            return {
               ...state,
               loading:false,
               modal_loading: true 
            }
        case FAN_PUSH_NOTIFICATIONS_SUCCESS :
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
            };
        case SINGLE_FAN_NOTIFICATION:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case SINGLE_FAN_NOTIFICATION_SUCCESS:
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

export default FanPushNotification;