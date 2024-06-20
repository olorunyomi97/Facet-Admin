import {
    API_ERROR,
    BLOCK_CELEBRITY,
    BLOCK_CELEBRITY_SUCCESS,
    CREATE_CELEBRITY,
    CREATE_CELEBRITY_SUCCESS,
    GET_CELEBRITY_SUCCESS,
    GET_SINGLE_CELEBRITY_SUCCESS,
} from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    celebrities: [],
    celebrity_detail: [],
    modal_loading: false,
    notify_success: false,
};

const Celebrities = (state = initialState, action) => {
    switch (action.type) {
        case GET_CELEBRITY_SUCCESS:
            return {
                ...state,
                loading: false,
                celebrities: action.payload,
            };
        case GET_SINGLE_CELEBRITY_SUCCESS:
            return {
                ...state,
                loading: false,
                celebrity_detail: action.payload,
            };
        case CREATE_CELEBRITY:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case CREATE_CELEBRITY_SUCCESS:
            const update_celebs = state.celebrities.data.unshift(action.payload);
            return {
                ...state,
                celebrities: update_celebs,
                loading: false,
                modal_loading: false,
                notify_success: true,
            };
        case BLOCK_CELEBRITY:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case BLOCK_CELEBRITY_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                modal_loading: false,
            };

        default:
            return state;
    }
};

export default Celebrities;
