import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_REPORTED_CONTENT } from './actionTypes';
import { apiError, getReportedcontentSuccess } from 'store/actions';

//Include Both Helper File with needed methods
import { getAllReportedcontent } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllReportedcontent() {
    try {
        const response = yield call(getAllReportedcontent);
        console.log(response);
        yield put(getReportedcontentSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* ReportedContentSaga() {
    yield takeEvery(GET_REPORTED_CONTENT, doGetAllReportedcontent);
}

export default ReportedContentSaga;
