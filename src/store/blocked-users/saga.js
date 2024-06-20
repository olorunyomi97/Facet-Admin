import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_BLOCKED_USERS, UNBLOCK_USER } from './actionTypes';
import { apiError, getBlockedusersSuccess, unblockUserSuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllBlockedusers, unblockUser } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllBlockedusers() {
    try {
        const response = yield call(getAllBlockedusers);
        console.log(response);
        yield put(getBlockedusersSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doUnblockUser({ payload: { user_id } }) {
    try {
        const response = yield call(unblockUser, user_id);
        // console.log(user_id);
        // console.log('user data in the saga');
        yield put(unblockUserSuccess(response));
        push_success_notifications(response.message);
        setTimeout(function () {
            window.location.href = '/blocked-users';
        }, 2000);
    } catch (error) {
        push_error_notifications(error.response.data.error.message);
        yield put(apiError(error.response.data.error.message));
    }
}

function* blockedusersSaga() {
    yield takeEvery(GET_BLOCKED_USERS, doGetAllBlockedusers);
    yield takeEvery(UNBLOCK_USER, doUnblockUser);
}

export default blockedusersSaga;
