import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  VERIFY_USER_LOGIN,
  VERIFY_LOGIN,
  REVERIFY_USER_LOGIN,
  REVERIFY_LOGIN,
} from "./actionTypes"

export const loginUser = (user, history) => {
  return {
	type: LOGIN_USER,
	payload: { user, history },
  }
}

export const loginSuccess = user => {
  return {
	type: LOGIN_SUCCESS,
	payload: user,
  }
}

export const verifyLogin = response => {
  return {
	type: VERIFY_LOGIN,
	payload: response,
  }
}

export const verifyUserLogin = verify_payload => {
	return {
		type: VERIFY_USER_LOGIN,
		payload: { verify_payload },
	}
}

export const reverifyLogin = response => {
  return {
	type: REVERIFY_LOGIN,
	payload: response,
  }
}

export const reverifyUserLogin = verify_payload => {
	return {
		type: REVERIFY_USER_LOGIN,
		payload: { verify_payload },
	}
}

export const logoutUser = history => {
  return {
	type: LOGOUT_USER,
	payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
	type: LOGOUT_USER_SUCCESS,
	payload: {},
  }
}

export const apiError = error => {
  return {
	type: API_ERROR,
	payload: error,
  }
}
