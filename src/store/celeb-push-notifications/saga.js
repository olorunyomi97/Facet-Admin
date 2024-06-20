import { call, put, takeEvery } from 'redux-saga/effects';
import { SEND_PUSH_NOTIFICATIONS, SINGLE_NOTIFICATION, SINGLE_NOTIFICATION_SUCCESS } from './actionTypes';
import { apiError, sendPushNotificationsSuccess, singleNotificationSuccess } from './actions';

//Include Both Helper File with needed methods
import { sendPushNotifications, singleNotification } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doSendPushNotifications({payload: {notifications} }) {
    try {
        const response = yield call(sendPushNotifications,notifications);
        push_success_notifications(response.message);
        yield put(sendPushNotificationsSuccess(response));
        setTimeout(function () {
            window.location.href = '/celebrities';
        }, 2000);
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* doSingleNotification({ payload: { celebData } }) {
    try {
        const response = yield call(singleNotification, celebData);
        push_success_notifications(response.message);
        yield put(singleNotificationSuccess(response));
        setTimeout(function () {
            window.location.href = '/celebrity';
        }, 2000);
    }   catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* PushCelebNotificationsSaga() {
    yield takeEvery(SEND_PUSH_NOTIFICATIONS, doSendPushNotifications);
    yield takeEvery(SINGLE_NOTIFICATION, doSingleNotification);
}

export default PushCelebNotificationsSaga;