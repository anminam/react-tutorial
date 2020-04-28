import { createStore, applyMiddleware } from "redux";
import createReduxSaga from 'redux-saga';
import {createLogger} from 'redux-logger';
import modules, { rootSaga } from './modules';

const saga = createReduxSaga();
const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, saga));
saga.run(rootSaga);

export default store;