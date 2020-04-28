import { handleActions, createAction } from "redux-actions";
import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = createAction(GET_POST, postid => postid);

const something = () => {
    return {
        data: {
            title: 'hello',
            body: 'world'
        }
    }
}


function* getPostSaga(action) {
    console.log(call(something, ''));

    try {
        const res = yield call(getPostAPI, action.payload);
        yield put({ type: GET_POST_SUCCESS, payload: res});
    } catch(e) {
        yield put({ type: GET_POST_FAILURE, payload:e});
    }
}

const initState = {
    data: {
        title: '',
        body: ''
    }
}

export function* postSaga() {
    yield takeEvery('GET_POST', getPostSaga);
}

export default handleActions({
    [GET_POST_SUCCESS]: (state, action) => {
        const {title, body} = action.payload.data;
        return {
            data: {title, body}
        }
    }
}, initState)