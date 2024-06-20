import { SET_SUBSCRIPTION, SET_SUBSCRIPTION_SUCCESS, API_ERROR } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    celebrities: [],
    // admins: [],
    modal_loading: false,
    notify_success: false,
};

const MinimunSubscription = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSCRIPTION:
            return {
                ...state,
                loading: false,
                modal_loading: true,
            };
        case SET_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                loading: false,
                modal_loading: false,
                notify_success: true,
                // fan: action.payload,
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
export default MinimunSubscription;
