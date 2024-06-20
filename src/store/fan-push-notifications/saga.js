import { call, put, takeEvery } from 'redux-saga/effects';
import { FAN_PUSH_NOTIFICATIONS, SINGLE_FAN_NOTIFICATION  } from './actionTypes';
import { apiError, fanPushNotificationsSuccess, singleFanNotificationSuccess } from './actions';

//Include Both Helper File with needed methods
import { fanPushNotifications, singleFanNotification } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doFanPushNotifications({payload: {notifications} }) {
    try {
        const response = yield call(fanPushNotifications,notifications);
        push_success_notifications(response.message);
        yield put(fanPushNotificationsSuccess(response));
        setTimeout(function () {
            window.location.href = '/fans';
        }, 2000);
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* doSingleFanNotification({ payload: { fanData } }) {
    try {
        const response = yield call(singleFanNotification, fanData);
        push_success_notifications(response.message);
        yield put(singleFanNotificationSuccess(response));
        setTimeout(function () {
            window.location.href = '/fan';
        }, 2000);
    }   catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* PushFanNotificationsSaga() {
    yield takeEvery(FAN_PUSH_NOTIFICATIONS, doFanPushNotifications);
    yield takeEvery(SINGLE_FAN_NOTIFICATION, doSingleFanNotification);
}

export default PushFanNotificationsSaga;
