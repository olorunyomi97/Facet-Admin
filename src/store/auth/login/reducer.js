import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR, 
  VERIFY_LOGIN,
  REVERIFY_LOGIN,
} from "./actionTypes"

const initialState = {
	error: "",
	apiError: null,
	loading: false,
	otp_data: {},
	modal_loading: false,
    notify_success: false,
}

const login = (state = initialState, action) => {
  	switch (action.type) {
		case LOGIN_USER:
			state = {
				...state,
				loading: true,
				error: "",
			}
			break

		case LOGIN_SUCCESS:
			state = {
				...state,
				loading: false,
			}
			break

		case VERIFY_LOGIN:
			state = {
				...state,
				otp_data: action.payload,
				loading: false,
				modal_loading: false,
                notify_success: true,
			}
			break

		case REVERIFY_LOGIN:
			state = {
				...state,
				otp_data: action.payload,
				loading: false,
				modal_loading: false,
				notify_success: true,
			}
			break

		case LOGOUT_USER:
			state = { ...state }
			break

		case LOGOUT_USER_SUCCESS:
			state = { ...state }
			break

		case API_ERROR:
			state = { ...state, error: action.payload, loading: false }
			break

		default:
			state = { ...state }
			break
  }
  return state
}

export default login
