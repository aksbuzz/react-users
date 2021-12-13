import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const logger = createLogger();
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));
sagaMiddleWare.run(rootSaga);

export default store;
