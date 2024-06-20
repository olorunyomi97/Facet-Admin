import { 
    API_ERROR, 
    GET_STORIES, 
    GET_STORIES_SUCCESS, 
    GET_SINGLE_STORY, 
    GET_SINGLE_STORY_SUCCESS,
    DELETE_STORY,
    DELETE_STORY_SUCCESS,
    DELETE_SINGLE_STORY,
    DELETE_SINGLE_STORY_SUCCESS
} from './actionTypes';

export const getAllStories = () => {
    return {
        type: GET_STORIES,
    };
};

export const getStoriesSuccess = stories => {
    return {
        type: GET_STORIES_SUCCESS,
        payload: stories,
    };
};

export const getSingleStory = story_id => {
    return {
        type: GET_SINGLE_STORY,
        payload: story_id,
    };
};

export const getSingleStorySuccess = response => {
    return {
        type: GET_SINGLE_STORY_SUCCESS,
        payload: response,
    };
};

export const deleteStory = story_id => {
    return {
        type: DELETE_STORY,
        payload: { story_id },
    };
};

export const deleteStorySuccess = stories => {
    return {
        type: DELETE_STORY_SUCCESS,
        payload: stories,
    };
};

export const deleteSingleStory = story_id => {
    return {
        type: DELETE_SINGLE_STORY,
        payload: { story_id },
    };
};

export const deleteSingleStorySuccess = stories => {
    return {
        type: DELETE_SINGLE_STORY_SUCCESS,
        payload: stories,
    };
};


export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
