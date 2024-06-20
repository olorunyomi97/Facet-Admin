import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_SUBSCRIPTION_GIFTS } from './actionTypes';
import { apiError, getSubscriptionGiftsSuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllSubscriptionGifts } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllSubscriptionGifts() {
    try {
        const response = yield call(getAllSubscriptionGifts);
        console.log(response);
        yield put(getSubscriptionGiftsSuccess(response));
    } catch (error) {
        yield put(apiError);
    }
}

function* SubscriptionGiftSaga() {
    yield takeEvery(GET_SUBSCRIPTION_GIFTS, doGetAllSubscriptionGifts);
}

export default SubscriptionGiftSaga;
