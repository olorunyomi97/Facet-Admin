import { SEND_PUSH_NOTIFICATIONS, SEND_PUSH_NOTIFICATIONS_SUCCESS, SINGLE_NOTIFICATION, SINGLE_NOTIFICATION_SUCCESS, API_ERROR } from './actionTypes';

export const sendPushNotifications = notifications => {
    return {
        type: SEND_PUSH_NOTIFICATIONS,
        payload: { notifications },
    }
}

export const sendPushNotificationsSuccess = response => {
    return {
        type: SEND_PUSH_NOTIFICATIONS_SUCCESS,
        payload: response,
    };
};

export const singleNotification = celebData => {
    return {
        type: SINGLE_NOTIFICATION,
        payload: { celebData }
    }
}

export const singleNotificationSuccess = response => {
    return {
        type: SINGLE_NOTIFICATION_SUCCESS,
        payload: { response }
    }
}

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};