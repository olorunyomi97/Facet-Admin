import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_SUBSCRIPTION } from './actionTypes';
import { apiError, setSubscriptionSuccess } from './actions';

//Include Both Helper File with needed methods
import { setSubscription } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doSetSubscription({ payload: { subscription_price } }) {
    try {
        const response = yield call(setSubscription, subscription_price);
        push_success_notifications(response.message);
        yield put(setSubscriptionSuccess(response));
        setTimeout(function () {
            window.location.href = '/celebrities';
        }, 2000);
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* minimumSubscriptionSaga() {
    yield takeEvery(SET_SUBSCRIPTION, doSetSubscription);
}

export default minimumSubscriptionSaga;
