import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_REPORTED_USERS } from './actionTypes';
import { apiError, getReportedusersSuccess } from 'store/actions';

//Include Both Helper File with needed methods
import { getAllReportedusers } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllReportedusers() {
    try {
        const response = yield call(getAllReportedusers);
        console.log(response);
        yield put(getReportedusersSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* ReportedUsersSaga() {
    yield takeEvery(GET_REPORTED_USERS, doGetAllReportedusers);
}

export default ReportedUsersSaga;
