import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_STORIES, GET_SINGLE_STORY, DELETE_STORY, DELETE_SINGLE_STORY } from './actionTypes';
import { apiError, getStoriesSuccess, getSingleStorySuccess, deleteStorySuccess, deleteSingleStorySuccess } from './actions';

//Include Both Helper File with needed methods
import { getAllStories, getSingleStory, deleteStory, deleteSingleStory } from 'helpers/backend_helper';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

function* doGetAllStories() {
    try {
        const response = yield call(getAllStories);
        console.log(response);
        yield put(getStoriesSuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doGetSingleStory({ payload }) {
    try {
        const response = yield call(getSingleStory, payload);
        yield put(getSingleStorySuccess(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* doDeleteStory({ payload: { story_id }}) {
    try {
        const response = yield call(deleteStory, story_id);
        push_success_notifications(response.message);
        yield put(deleteStorySuccess(response));
        setTimeout(function () {
            // window.location.href = '/stories';
            // window.location.reload()
        }, 1000);
    } catch (error) {
        push_error_notifications(error.response.data.error.message);
        yield put(apiError(error));
    }
}

function* doDeleteSinglStory({ payload: { story_id } }) {
    try {
        const response = yield call(deleteSingleStory, story_id);
        window.location.href = '/stories';
        yield put(deleteSingleStorySuccess(response));
    } catch (error) {
        console.log(error);
        yield put(apiError(error));
    }
}

function* storiesSaga() {
    yield takeEvery(GET_STORIES, doGetAllStories);
    yield takeEvery(GET_SINGLE_STORY, doGetSingleStory);
    yield takeEvery(DELETE_STORY, doDeleteStory);
    yield takeEvery(DELETE_SINGLE_STORY, doDeleteSinglStory);
}

export default storiesSaga;
