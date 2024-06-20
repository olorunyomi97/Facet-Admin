import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, VERIFY_USER_LOGIN, REVERIFY_USER_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, verifyLogin, logoutUserSuccess, reverifyLogin } from "./actions"

import { postAdminLogin, verifyPayload, reverifyPayload } from "helpers/backend_helper"
import { push_success_notifications } from 'helpers/notify_helper';



function* dologinUser({ payload: { user, history } }) {
	try {
		const response = yield call(postAdminLogin, user);
		yield put(verifyLogin(response));
		history.push(`/verify-login?token=${response.data.verify_token}&email=${response.data.email}`)
		
	} catch (error) {
		yield put(apiError(error.response.data.error.message))
	}
}

function* doVerifyLogin({ payload: { verify_payload }}) {
	try {
		const response = yield call(verifyPayload, verify_payload);
		push_success_notifications(response.message);
		if(response.data.token != undefined) {
			localStorage.setItem("authUser", JSON.stringify(response.data))
			window.location.replace("/celebrities");
		}

		
	} catch (error) {
		console.log(error);
		yield put(apiError(error))
	}
}

function* doReverifyLogin({ payload: { verify_payload }}) {
	try {
		const response = yield call(reverifyPayload, verify_payload);
		push_success_notifications(response.message);
		if(response.data.token != undefined) {
			localStorage.setItem("authUser", JSON.stringify(response.data))
			window.location.replace("/celebrities");
		}

		
	} catch (error) {
		console.log(error);
		yield put(apiError(error))
	}
}

function* logoutUser({ payload: { history } }) {
	try {
		localStorage.removeItem("authUser")

		if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
			const response = yield call(fireBaseBackend.logout)
			// runLogoutTimer(dispatch, response.data.timer * 1000)
			yield put(logoutUserSuccess(response))
		}
		history.push("/login")
	} catch (error) {
		yield put(apiError(error))
	}
}


function* authSaga() {
	yield takeEvery(LOGIN_USER, dologinUser)
	yield takeEvery(VERIFY_USER_LOGIN, doVerifyLogin)
	yield takeEvery(REVERIFY_USER_LOGIN, doReverifyLogin)
	yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
