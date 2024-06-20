import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ADMIN, CREATE_ADMIN, DELETE_ADMIN } from './actionTypes';
import { apiError, getAdminsSuccess, createAdminSuccess, deleteAdminSuccess } from './actions';

// including both helper file with required method
import { getAllAdmins, createAdmin, deleteAdmin } from 'helpers/backend_helper';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

function* doGetAllAdmins() {
    try {
        const response = yield call(getAllAdmins);
        yield put(getAdminsSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doCreateAdmins({ payload: { adminData } }) {
    try {
        const response = yield call(createAdmin, adminData);
        push_success_notifications(response.message);
        // yield put(createAdminSuccess(response))
        setTimeout(function () {
            window.location.href = '/admins';
        }, 2000);
    } catch (error) {
        yield put(apiError(error.response.data.error.message));
    }
}

function* doDeleteAdmin({ payload: { admin_id } }) {
    try {
        const response = yield call(deleteAdmin, admin_id);
        push_success_notifications(response.message);
        setTimeout(function () {
            window.location.href = '/admins';
        }, 1000);
    } catch (error) {
        push_error_notifications(error.response.data.error.message);
        yield put(apiError(error));
    }
}

function* adminsSaga() {
    yield takeEvery(GET_ADMIN, doGetAllAdmins);
    yield takeEvery(CREATE_ADMIN, doCreateAdmins);
    yield takeEvery(DELETE_ADMIN, doDeleteAdmin);
}

export default adminsSaga;
