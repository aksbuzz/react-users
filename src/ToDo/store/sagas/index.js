import { all, call } from 'redux-saga/effects';
import todoSaga from './todoSaga';

export default function* rootSaga() {
	yield all([call(todoSaga)]);
}
