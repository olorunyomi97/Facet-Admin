import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_LIVESTREAMS } from './actionsTypes';
import { apiError, getLivestreamsSuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllLivestreams } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllLivestreams() {
    try {
        const response = yield call(getAllLivestreams);
        console.log(response);
        yield put(getLivestreamsSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* livestreamsSaga() {
    yield takeEvery(GET_LIVESTREAMS, doGetAllLivestreams);
}

export default livestreamsSaga;
