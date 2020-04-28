import { createActions, handleAction, createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery } from "redux-saga/effects";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYMC = 'INCREMENT_ASYMC';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYMC);
export const decrementASync = createAction(DECREMENT_ASYNC);

export function* incrementAsyncSaga() {
    yield delay(1000);
    yield put(increment())
}

export function* decrementAsyncSaga() {
    yield delay(1000);
    yield put(decrement());
}

export function* counterSaga() {
    yield takeEvery(INCREMENT_ASYMC, incrementAsyncSaga);
    yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

export default handleActions({
    [INCREMENT]: (state,action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
},1)