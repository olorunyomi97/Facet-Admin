import { API_ERROR, GET_LIVESTREAMS_SUCCESS } from './actionsTypes';

const initialState = {
    error: null,
    loading: true,
    livestreams: [],
};

const Livestreams = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIVESTREAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                livestreams: action.payload,
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

export default Livestreams;
