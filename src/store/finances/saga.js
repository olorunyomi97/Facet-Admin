import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_FINANCES } from './actionTypes';
import { apiError,getFinancesSuccess } from 'store/actions';

//Include Both Helper File with needed methods
import { getAllFinances } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllFinances() {
    try {
        const response = yield call(getAllFinances);
        console.log(response);
        yield put(getFinancesSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }

}

function* FinancesSaga() {
    yield takeEvery(GET_FINANCES, doGetAllFinances);
}

export default FinancesSaga;