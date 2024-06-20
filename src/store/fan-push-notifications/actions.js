import { FAN_PUSH_NOTIFICATIONS, FAN_PUSH_NOTIFICATIONS_SUCCESS, SINGLE_FAN_NOTIFICATION, SINGLE_FAN_NOTIFICATION_SUCCESS, API_ERROR } from './actionTypes';

export const fanPushNotifications = notifications => {
    return {
        type: FAN_PUSH_NOTIFICATIONS,
        payload: { notifications },
    }
}

export const fanPushNotificationsSuccess = response => {
    return {
        type: FAN_PUSH_NOTIFICATIONS_SUCCESS,
        payload: response,
    };
};

export const singleFanNotification = fanData => {
    return {
        type: SINGLE_FAN_NOTIFICATION,
        payload: { fanData }
    }
}

export const singleFanNotificationSuccess = response => {
    return {
        type: SINGLE_FAN_NOTIFICATION_SUCCESS,
        payload: { response }
    }
}

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};