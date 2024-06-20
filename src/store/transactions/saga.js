import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_TRANSACTIONS } from './actionTypes';
import { apiError, getTransactionsSuccess } from 'store/actions';

//Include Both Helper File with needed methods
import { getAllTransactions } from 'helpers/backend_helper';
// import { push_success_notifications } from 'helpers/notify_helper';

function* doGetAllTransactions() {
    try {
        const response = yield call(getAllTransactions);
        console.log(response);
        yield put(getTransactionsSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* TransactionsSaga() {
    yield takeEvery(GET_TRANSACTIONS, doGetAllTransactions);
}

export default TransactionsSaga;
