import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_CONTENT, DELETE_CONTENT, GET_CONTENT_DETAILS } from './actionTypes';
import { apiError, getContentSuccess, deleteContentSuccess, getContentDetailsSuccess } from './actions';

// including both helper file with required method
import { getAllContents, deleteContent, getSingleContent } from 'helpers/backend_helper';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

function* doGetAllContents() {
    try {
        const response = yield call(getAllContents);
        console.log(response);
        yield put(getContentSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doDeleteContent({ payload: { content_id } }) {
    try {
        const response = yield call(deleteContent, content_id);
        push_success_notifications(response.message);
        yield put(deleteContentSuccess(response));
        setTimeout(function () {
            window.location.href = '/content';
            // window.location.reload() 
        }, 1000);
    } catch (error) {
        push_error_notifications(error.response.data.error.message);
        yield put(apiError(error));
    }
}

function* doGetSingleContent({ payload }) {
    try {
        const response = yield call(getSingleContent, payload);
        yield put(getContentDetailsSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* contentsSaga() {
    yield takeEvery(GET_CONTENT, doGetAllContents);
    yield takeEvery(DELETE_CONTENT, doDeleteContent);
    yield takeEvery(GET_CONTENT_DETAILS, doGetSingleContent);
}

export default contentsSaga;
