import {
    API_ERROR, 
    GET_STORIES_SUCCESS, 
    GET_SINGLE_STORY_SUCCESS, 
    DELETE_STORY,
    DELETE_SINGLE_STORY,
    DELETE_SINGLE_STORY_SUCCESS
    } from './actionTypes';

const initialState = {
    error: null,
    loading: true,
    stories: [],
    story: {},
    modal_loading: false,
    notify_success: false,
};

const Stories = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                stories: action.payload,
            };
        case GET_SINGLE_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                story: action.payload,
                modal_loading: false,
                notify_success: true,
            };
        case DELETE_STORY:
            return {
                ...state,
                loading: false,
            }
        case DELETE_SINGLE_STORY:
            return {
                ...state,
                loading: false,
            }
        case DELETE_SINGLE_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        
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

export default Stories;
