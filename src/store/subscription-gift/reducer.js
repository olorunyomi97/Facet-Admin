import { GET_SUBSCRIPTION_GIFTS_SUCCESS, API_ERROR } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    gift: [],
};

const SubscriptionGifts = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTION_GIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                gift: action.payload,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default SubscriptionGifts;
