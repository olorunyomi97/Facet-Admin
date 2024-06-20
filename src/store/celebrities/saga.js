import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE_CELEBRITY, BLOCK_CELEBRITY, GET_CELEBRITY, GET_SINGLE_CELEBRITY } from './actionTypes';
import { apiError, getCelebritiesSuccess, getSingleCelebritySuccess, blockCelebritySuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllCelebrities, getSingleCeleb, createCelebrity, blockCelebrity } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllCelebrities() {
    try {
        const response = yield call(getAllCelebrities);
        console.log(response);
        yield put(getCelebritiesSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doGetSingleCelebrity({ payload }) {
    try {
        const response = yield call(getSingleCeleb, payload);
        yield put(getSingleCelebritySuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doCreateCelebrities({ payload: { celebData } }) {
    try {
        const response = yield call(createCelebrity, celebData);
        push_success_notifications(response.message);
        setTimeout(function () {
            window.location.href = '/celebrities';
        }, 2000);
    } catch (error) {
        yield put(apiError(error.response.data.error.message));
    }
}

function* doBlockCelebrity({ payload: { celebData } }) {
    try {
        const response = yield call(blockCelebrity, celebData);
        push_success_notifications(response.message);
        yield put(blockCelebritySuccess(response));
        setTimeout(function () {
            window.location.href = '/celebrities';
        }, 2000);
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* celebritiesSaga() {
    yield takeEvery(GET_CELEBRITY, doGetAllCelebrities);
    yield takeEvery(CREATE_CELEBRITY, doCreateCelebrities);
    yield takeLatest(GET_SINGLE_CELEBRITY, doGetSingleCelebrity);
    yield takeEvery(BLOCK_CELEBRITY, doBlockCelebrity);
}

export default celebritiesSaga;
