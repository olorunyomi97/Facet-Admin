import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_FAN, UPGRADE_FAN, GET_FAN_DETAILS, BLOCK_FAN } from './actionTypes';
import { apiError, getFansSuccess, upgradeFanSuccess, getFanDetailsSuccess, blockFanSuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllFans, upgradeFan, getSingleCeleb, blockFan } from 'helpers/backend_helper';
import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllFans() {
    try {
        console.log('fans here');
        const response = yield call(getAllFans);
        yield put(getFansSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doGetSingleFan({ payload }) {
    try {
        const response = yield call(getSingleCeleb, payload);
        yield put(getFanDetailsSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doUpgradeFan({ payload: { fanData } }) {
    try {
        const response = yield call(upgradeFan, fanData);
        window.location.href = '/celebrities';
        yield put(upgradeFanSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* doBlockFan({ payload: { fanData } }) {
    try {
        const response = yield call(blockFan, fanData);
        push_success_notifications(response.message);
        yield put(blockFanSuccess(response));
        setTimeout(function () {
            window.location.href = '/fans';
        }, 2000);
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* fansSaga() {
    yield takeEvery(GET_FAN, doGetAllFans);
    yield takeEvery(UPGRADE_FAN, doUpgradeFan);
    yield takeEvery(BLOCK_FAN, doBlockFan);
    yield takeEvery(GET_FAN_DETAILS, doGetSingleFan);
}

export default fansSaga;
