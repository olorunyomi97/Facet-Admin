import { UPGRADE_FAN, UPGRADE_FAN_SUCCESS } from "./actionTypes"

export const upgradeFan = (fanData) => {
    return {
        type: UPGRADE_FAN,
        payload: { fanData },
    }
}

export const upgradeFanSuccess = (fan) => {
    return {
        type: UPGRADE_FAN_SUCCESS,
        payload: fan
    }
}


export const apiError = error => {
	return {
		type: API_ERROR,
		payload: error,
	}
}