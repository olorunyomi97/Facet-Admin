import { API_ERROR, UPGRADE_FAN, UPGRADE_FAN_SUCCESS } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    fans: [],
}

const Fans = (state = initialState, action) => {
    switch (action.type) {
        case UPGRADE_FAN:
            return {
                ...state,
                loading:false,
            }
        case UPGRADE_FAN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case API_ERROR:
            return { 
                ...state, 
                error: action.payload, 
                loading: false,
            }

        default: 
            return state
    }
}

export default Fans