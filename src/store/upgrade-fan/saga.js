import { call, put, takeEvery } from "redux-saga/effects"
import { UPGRADE_FAN } from "./actionTypes";
import { apiError, upgradeFanSuccess } from "./actions";

import { upgradeFan } from "helpers/backend_helper";

function* doUpgradeFan({ payload: { fanData }}) {
    try {
        console.log(fanData)

        const response = yield call(upgradeFan,fanData)
        console.log(response);
        yield put(upgradeFanSuccess(response))
    } catch (error) {
        console.log(error)
        yield put(apiError(error))
    }
}

function* fansSaga() {
    yield takeEvery
}